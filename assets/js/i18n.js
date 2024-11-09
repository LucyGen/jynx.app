// i18n.js - Internationalization system for the gaming team landing page

class I18nManager {
    constructor() {
        this.currentLocale = localStorage.getItem('userLocale') || 
                            navigator.language.split('-')[0] || 
                            'en';
        this.translations = {};
        this.observers = new Set();
        this.defaultLocale = 'en';
    }

    /**
     * Initialize the I18n system
     * @returns {Promise} Resolves when initialization is complete
     */
    async init() {
        try {
            // Load the default locale first
            await this.loadTranslations(this.defaultLocale);
            
            // If current locale is different from default, load it
            if (this.currentLocale !== this.defaultLocale) {
                await this.loadTranslations(this.currentLocale);
            }

            this.updatePageContent();
            this.setupLanguageSwitcher();
        } catch (error) {
            console.error('Failed to initialize i18n:', error);
            // Fallback to default locale if there's an error
            this.currentLocale = this.defaultLocale;
        }
    }

    /**
     * Load translations for a specific locale
     * @param {string} locale - The locale code to load
     * @returns {Promise} Resolves when translations are loaded
     */
    async loadTranslations(locale) {
        try {
            const response = await fetch(`/locales/${locale}.json`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            this.translations[locale] = await response.json();
        } catch (error) {
            console.error(`Failed to load translations for ${locale}:`, error);
            throw error;
        }
    }

    /**
     * Get a translated string
     * @param {string} key - The translation key
     * @param {Object} params - Parameters for string interpolation
     * @returns {string} The translated string
     */
    translate(key, params = {}) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLocale];
        
        // Traverse the translation object
        for (const k of keys) {
            translation = translation?.[k];
            if (translation === undefined) {
                console.warn(`Translation missing for key: ${key}`);
                // Fallback to default locale
                translation = this.getFromDefaultLocale(key);
                break;
            }
        }

        // Return key if no translation found
        if (typeof translation !== 'string') {
            return key;
        }

        // Replace parameters in translation
        return translation.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, param) => {
            return params[param] !== undefined ? params[param] : `{{${param}}}`;
        });
    }

    /**
     * Get translation from default locale as fallback
     * @param {string} key - The translation key
     * @returns {string} The translation from default locale
     */
    getFromDefaultLocale(key) {
        const keys = key.split('.');
        let translation = this.translations[this.defaultLocale];
        
        for (const k of keys) {
            translation = translation?.[k];
            if (translation === undefined) {
                return key;
            }
        }
        
        return translation;
    }

    /**
     * Change the current locale
     * @param {string} newLocale - The new locale to switch to
     * @returns {Promise} Resolves when locale is changed
     */
    async changeLocale(newLocale) {
        try {
            if (!this.translations[newLocale]) {
                await this.loadTranslations(newLocale);
            }
            
            this.currentLocale = newLocale;
            localStorage.setItem('userLocale', newLocale);
            
            this.updatePageContent();
            this.notifyObservers();
            
            // Update HTML lang attribute
            document.documentElement.lang = newLocale;
            
        } catch (error) {
            console.error(`Failed to change locale to ${newLocale}:`, error);
            throw error;
        }
    }

    /**
     * Update all translatable elements on the page
     */
    updatePageContent() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translate(key);
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key);
        });

        // Update elements with data-i18n-aria-label attribute
        document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            element.setAttribute('aria-label', this.translate(key));
        });
    }

    /**
     * Setup the language switcher in the UI
     */
    setupLanguageSwitcher() {
        const switcher = document.getElementById('language-switcher');
        if (!switcher) return;

        switcher.addEventListener('change', (event) => {
            this.changeLocale(event.target.value);
        });
    }

    /**
     * Add an observer for locale changes
     * @param {Function} callback - Function to call when locale changes
     */
    addObserver(callback) {
        this.observers.add(callback);
    }

    /**
     * Remove an observer
     * @param {Function} callback - Function to remove from observers
     */
    removeObserver(callback) {
        this.observers.delete(callback);
    }

    /**
     * Notify all observers of a locale change
     */
    notifyObservers() {
        this.observers.forEach(callback => {
            try {
                callback(this.currentLocale);
            } catch (error) {
                console.error('Error in i18n observer:', error);
            }
        });
    }
}

// Create and export a singleton instance
const i18n = new I18nManager();
export default i18n;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init().catch(error => {
        console.error('Failed to initialize i18n:', error);
    });
});