class HubspotFormHandler extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                formContainer: '.hubspot-form-container'
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings('selectors');
        return {
            $formContainer: this.$element.find(selectors.formContainer)
        };
    }

    bindEvents() {
        const { $formContainer } = this.elements;

        const formId = $formContainer.data('form-id');
        const portalId = $formContainer.data('portal-id');

        hbspt.forms.create({
            region: "na1",
            formId,
            portalId,
            target: `#${$formContainer.attr('id')}`,
            onFormReady($form) {
                setTimeout(initHubSpotForms, 1);
            },
        });
    }
}

jQuery(window).on('elementor/frontend/init', () => {
    const addHandler = ($element) => {
        elementorFrontend.elementsHandler.addHandler(HubspotFormHandler, { $element });
    };

    elementorFrontend.hooks.addAction('frontend/element_ready/hubspot_widget.default', addHandler);
});
