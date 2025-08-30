// Get Date in XY days
function getTimestamp(days){
    var timestamp = new Date();
    timestamp.setDate(timestamp.getDate() + days);
    return timestamp;
}
// Set a cookie
function setCookie(name,value,days,crossdomain = true){
    var expires = getTimestamp(days);
    var isProd = window.location.host.includes('bloomreach.com');
    if(isProd){
      crossdomain = crossdomain ? '; domain=bloomreach.com' : '';
    }else{
      crossdomain = '';
    }
    document.cookie = name+'='+value+'; expires='+expires+'; path=/'+crossdomain;
}
// Get cookie value
function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

// Hubspot forms
window.addEventListener('message', event => {
	if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
		var currentURL = window.location.href;
		jQuery('.hs_form_submit_url input').val(currentURL).change();

    // forms translate START
    var allTranslations = {
      "hs_firstname": {
        "en": "First name",
        "de": "Vorname",
        "fr": "Prénom"
      },
      "hs_lastname": {
        "en": "Last name",
        "de": "Nachname",
        "fr": "Nom"
      },
      "hs_email": {
        "en": "Business email",
        "de": "Geschäftliche E-Mail-Adresse",
        "fr": "Adresse email professionnelle"
      },
      "hs_company": {
        "en": "Company name",
        "de": "Firma",
        "fr": "Entreprise"
      },
      "hs_phone": {
        "en": "Phone number",
        "de": "Telefonnummer",
        "fr": "Numéro de téléphone"
      },
      "hs_jobtitle": {
        "en": "Job title",
        "de": "Berufsbezeichnung",
        "fr": "Intitulé de l'emploi"
      },
      "hs_submit": {
        "en": "Submit",
        "de": "Absenden",
        "fr": "Soumettre"
      },
      "submit_get_early_access": {
        "en": "Get Early Access",
        "de": "Jetzt einschreiben",
        "fr": "S’inscrire"
      },
      "hs-dependent-field": {
        "en": "I’d like updates on Bloomreach news, events and services (see <a href=\"/en/legal/privacy\">Privacy policy</a>).",
        "de": "Ich möchte mit Neuigkeiten, Events und Services von Bloomreach auf dem Laufenden gehalten werden (siehe <a href=\"/de/legal/privacy\">Datenschutzrichtlinie</a>).",
        "fr": "Je souhaite recevoir des informations sur les actualités, les événements et les services de Bloomreach (voir la <a href=\"/fr/legal/privacy\">Politique de Confidentialité</a>)."
      },
      "hs_demo_checkbox": {
        "en": "I want a live demo from a Bloomreach Expert",
        "de": "Ich hätte gern eine Live-Demo mit einer Bloomreach-Expertin oder einem Experten.",
        "fr": "Je veux une démonstration en direct de la part d'un Expert Bloomreach"
      },
      "hs_module_interest_option_title_1": {
        "en": "Omnichannel Orchestration",
        "de": "Engagement",
        "fr": "Engagement"
      },
      "hs_module_interest_option_title_2": {
        "en": "Ecommerce Product Discovery",
        "de": "Discovery",
        "fr": "Discovery"
      },
      "hs_module_interest_option_title_3": {
        "en": "Headless CMS for Commerce",
        "de": "Content",
        "fr": "Content"
      },
      "hs_module_interest_option_subtitle_1": {
        "en": "Email, SMS, Ads, Web Personalization",
        "de": "CDP + Marketing Automation",
        "fr": "CDP + Automatisation Marketing"
      },
      "hs_module_interest_option_subtitle_2": {
        "en": "Search, Merchandising, Recommendations",
        "de": "Search, Merch und Recs",
        "fr": "Recherche, Merchandising et Recommandations"
      },
      "hs_module_interest_option_subtitle_3": {
        "en": "Page Building and Site Management",
        "de": "ein Headless CMS",
        "fr": "Un CMS Headless"
      },
      "hs_i_am_from_option_title_1": {
        "en": "B2C Retailer",
        "de": "B2C-Retailer",
        "fr": "Un Détaillant B2C"
      },
      "hs_i_am_from_option_title_2": {
        "en": "B2B Distributor/Manufacturer",
        "de": "B2B-Vertriebspartner/Hersteller",
        "fr": "Un Distributeur/Fabricant B2B"
      },
      "hs_i_am_from_option_title_3": {
        "en": "Agency",
        "de": "Agentur",
        "fr": "Une Agence"
      },
      "hs_i_am_from_option_title_4": {
        "en": "Other",
        "de": "Sonstiges",
        "fr": "Autre"
      },
      "hs_website": {
        "en": "Website",
        "de": "Website",
        "fr": "Site web"
      },
      "validation_msg_2": {
        "en": "Must contain only numbers, +()-. and x.",
        "de": "Dieses Feld sollte nur Zahlen, () -. und x enthalten",
        "fr": "Must contain only numbers, +()-. and x."
      },
      "validation_msg_3": {
        "en": "Email must be formatted correctly.",
        "de": "Bitte prüfen Sie das Format Ihrer E-Mail-Adresse",
        "fr": "Email must be formatted correctly."
      },
      "validation_msg_4": {
        "en": "Please complete all required fields.",
        "de": "Please complete all required fields.",
        "fr": "Please complete all required fields."
      },
      "validation_msg_5": {
        "en": "Please select an option from the dropdown menu.",
        "de": "Please select an option from the dropdown menu.",
        "fr": "Please select an option from the dropdown menu."
      },
      "hs_contact_us_form_option_1": {
        "en": "I Want to Contact Sales",
        "de": "Das Sales-Team kontaktieren",
        "fr": "Contacter le service commercial"
      },
      "hs_contact_us_form_option_2": {
        "en": "I Want to Contact HR",
        "de": "Das HR-Team kontaktieren",
        "fr": "Contacter les ressources humaines"
      },
      "hs_contact_us_form_option_3": {
        "en": "I Have a General Inquiry",
        "de": "Generelle Frage stellen",
        "fr": "Question générale"
      },
      "hs_contact_us_form_option_4": {
        "en": "I'm Interested in a Partnership",
        "de": "Interesse an einer Partnerschaft",
        "fr": "Contacter le service partenariat"
      },
      "submit_btn_req_demo": {
        "en": "Schedule My Demo",
        "de": "Demo vereinbaren",
        "fr": "Planifier une démonstration"
      },
      "submit_btn_pricing": {
        "en": "Request Pricing",
        "de": "Preise anfragen",
        "fr": "Demander un devis"
      },
      "submit_btn_getintouch": {
        "en": "Get in Touch",
        "de": "Jetzt kontaktieren",
        "fr": "Envoyer"
      },
      "submit_btn_view_report": {
        "en": "View the Report",
        "de": "View the Report",
        "fr": "Accéder à l’étude"
      },
      "submit_btn__whitepaper_detail": {
        "en": "Download now",
        "de": "Download now",
        "fr": "Download now"
      },
      "submit_btn__integrations": {
        "en": "Submit",
        "de": "Absenden",
        "fr": "Soumettre"
      },
      "submit_btn__contact_us": {
        "en": "Submit",
        "de": "Absenden",
        "fr": "Soumettre"
      },
      "submit_btn__blog_newsletter": {
        "en": "Yes, sign me up!",
        "de": "Yes, sign me up!",
        "fr": "Yes, sign me up!"
      },
      "submit_message_partners": {
        "en": "<p>Thank you for your enquiry into Bloomreach!</p> <p>A member of our partner team will contact you shortly regarding your request.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Eine Expertin oder ein Experte unseres Partner-Teams wird sich in Kürze bei Ihnen melden. </p>",
        "fr": "<p>Merci pour votre demande de renseignements à propos de Bloomreach !</p> <p>Un membre de notre équipe partenariat vous contactera très prochainement pour répondre à votre demande.</p>"
      },
      "submit_message_partner_detail": {
        "en": "<p>Thank you for your enquiry into Bloomreach!</p> <p>A member of our partner team will contact you shortly regarding your request.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Eine Expertin oder ein Experte unseres Partner-Teams wird sich in Kürze bei Ihnen melden. </p>",
        "fr": "<p>Merci pour votre demande de renseignements à propos de Bloomreach !</p> <p>Un membre de notre équipe partenariat vous contactera très prochainement pour répondre à votre demande.</p>"
      },
      "submit_message_integrations": {
        "en": "<p>Thank you for your interest in Bloomreach. Please check your inbox.</p>",
        "de": "<p>Vielen Dank für Ihr Interesse! Bitte checken Sie Ihre E-Mail.</p>",
        "fr": "<p>Merci de l'intérêt que vous portez à Bloomreach. Veuillez consulter votre boîte de réception.</p>"
      },
      "submit_message_pricing": {
        "en": "<p>Thank you for your enquiry into Bloomreach!</p> <p>A member of our sales team will contact you shortly regarding your request.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Wir freuen uns, dass Sie mehr über unsere Preisemodule erfahren möchten. Eine Expertin oder ein Experte unseres Sales-Teams wird sich in Kürze bei Ihnen melden. </p>",
        "fr": "<p>Merci pour votre demande de renseignements à propos de Bloomreach !</p> <p>Un membre de notre équipe commerciale vous contactera très prochainement pour répondre à votre demande.</p>"
      },
      "submit_message_pricing_pages": {
        "en": "<p>Thank you for your enquiry into Bloomreach!</p> <p>A member of our sales team will contact you shortly regarding your request.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Wir freuen uns, dass Sie mehr über unsere Preisemodule erfahren möchten. Eine Expertin oder ein Experte unseres Sales-Teams wird sich in Kürze bei Ihnen melden. </p>",
        "fr": "<p>Merci pour votre demande de renseignements à propos de Bloomreach !</p> <p>Un membre de notre équipe commerciale vous contactera très prochainement pour répondre à votre demande.</p>"
      },
      "submit_message_contact_us": {
        "en": "<p>Thank you.</p> <p>We'll be in touch with you soon!</p> <p>In the meantime, please check your inbox.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Eine Expertin oder ein Experte wird sich in Kürze bei Ihnen melden.</p> <p>Werfen Sie einen Blick in Ihre E-Mails. Wundern Sie sich nicht, wenn die Beantwortung Ihrer Anfrage ein paar Minuten dauert – wir wollen sichergehen, dass sich die oder der richtige Ansprechpartner:in um Ihr Anliegen kümmert.</p>",
        "fr": "<p>Merci.</p> <p>Nous vous contacterons très prochainement !</p> <p>En attendant, veuillez consulter votre boîte de réception.</p>"
      },
      "submit_message_platform_pages": {
        "en": "<p>Thank you.</p> <p>We'll be in touch with you soon!</p> <p>In the meantime, please check your inbox.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Eine Expertin oder ein Experte wird sich in Kürze bei Ihnen melden.</p> <p>Werfen Sie einen Blick in Ihre E-Mails. Wundern Sie sich nicht, wenn die Beantwortung Ihrer Anfrage ein paar Minuten dauert – wir wollen sichergehen, dass sich die oder der richtige Ansprechpartner:in um Ihr Anliegen kümmert.</p>",
        "fr": "<p>Merci.</p> <p>Nous vous contacterons très prochainement !</p> <p>En attendant, veuillez consulter votre boîte de réception.</p>"
      },
      "submit_message_req_demo": {
        "en": "<p>Thank you.</p> <p>We'll be in touch with you soon!</p> <p>In the meantime, please check your inbox.</p>",
        "de": "<p>Vielen Dank für Ihre Anfrage!</p> <p>Eine Expertin oder ein Experte wird sich in Kürze bei Ihnen melden.</p> <p>Werfen Sie einen Blick in Ihre E-Mails. Wundern Sie sich nicht, wenn die Beantwortung Ihrer Anfrage ein paar Minuten dauert – wir wollen sichergehen, dass sich die oder der richtige Ansprechpartner:in um Ihr Anliegen kümmert.</p>",
        "fr": "<p>Merci.</p> <p>Nous vous contacterons très prochainement !</p> <p>En attendant, veuillez consulter votre boîte de réception.</p>"
      },
      "hs_online_revenue": {
        "en": "Company revenue",
        "de": "Firmeneinkommen",
        "fr": "Chiffre d'affaires de l'entreprise"
      },
      "hs_message": {
        "en": "Message",
        "de": "Nachricht",
        "fr": "Message"
      },
      "hs_module_interest": {
        "en": "Product of interest",
        "de": "Mich interessiert",
        "fr": "Produit qui vous intéresse"
      },
      "hs_integration_name": {
        "en": "Integration name",
        "de": "Name der Integration",
        "fr": "Nom de l'intégration"
      },
      "hs_online_revenue_option_title_1": {
        "en": "$0 - 10 million",
        "de": "0 - 10€ Millionen",
        "fr": "0 - 10 millions de $"
      },
      "hs_online_revenue_option_title_2": {
        "en": "$11 - 24 million",
        "de": "11 - 24€ Millionen",
        "fr": "11 - 24 millions de $"
      },
      "hs_online_revenue_option_title_3": {
        "en": "$25-499 million",
        "de": "25 - 499€ Millionen",
        "fr": "25 - 499 millions de $"
      },
      "hs_online_revenue_option_title_4": {
        "en": "$500 million >",
        "de": "500€ Millionen >",
        "fr": "> 500 millions de $"
      },
      "hs_message_1": {
        "en": "What are you trying to accomplish with this integration?",
        "de": "Was möchten Sie mit der Integration erreichen?",
        "fr": "Que souhaitez-vous accomplir avec cette intégration ?"
      },
      "hs_email_1": {
        "en": "Company email",
        "de": "Geschäftliche E-Mail-Adresse",
        "fr": "Adresse email de l'entreprise"
      },
      "hs_i_am_from": {
        "en": "I am from",
        "de": "Ich komme von einem/einer",
        "fr": "Je représente"
      },
      "hs_contact_us_form_option": {
        "en": "Choose one:",
        "de": "Bitte auswählen…",
        "fr": "Choisissez entre :"
      },
      "validation_msg_1": {
        "en": "Please complete this required field.",
        "de": "Bitte füllen Sie das Pflichtfeld aus",
        "fr": "Merci de renseigner ce champ obligatoire."
      },
      "hs_country_select": {
        "en": "Country",
        "de": "Pays",
        "fr": "Pays"
      },
      "hs_state_region__select_": {
        "en": "State/region",
        "de": "State/region",
        "fr": "Région"
      },
      "hs_email_legal_1": {
        "en": "Email",
        "de": "E-Mail",
        "fr": "Adresse e-mail"
      },
      "submit_btn_legal_1": {
        "en": "Submit",
        "de": "Übermitteln/Senden",
        "fr": "Envoyer"
      },
      "hs-richtext_legal_1": {
        "en": "By submitting this form you consent to Bloomreach processing your data and contacting you to fulfill your request. For more information on how we are committed to protecting and respecting your privacy, please review our <a href=\"/en/legal/privacy\">Privacy policy.</a>",
        "de": "Mit dem Übersenden dieses Formulars erklären Sie sich damit einverstanden, dass Bloomreach Ihre Daten verarbeitet und Sie kontaktiert, um Ihre Anfrage zu beantworten. Weitere Informationen darüber, wie wir Ihre Privatsphäre schützen und respektieren, finden Sie in unserer <a href=\"/de/legal/privacy\">Datenschutzrichtlinie.</a>",
        "fr": "En envoyant ce formulaire, vous acceptez que Bloomreach traite vos données et vous contacte pour répondre à votre demande. Pour plus d’informations sur notre engagement en faveur de la protection et du respect de la vie privée, merci de consulter notre <a href=\"/fr/legal/privacy\">Politique de Confidentialité.</a>"
      },
      "submit_message_legal_1": {
        "en": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "de": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "fr": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>"
      },
      "hs_email_legal_2": {
        "en": "Email",
        "de": "E-Mail",
        "fr": "Adresse e-mail"
      },
      "submit_btn_legal_2": {
        "en": "Submit",
        "de": "Übermitteln/Senden",
        "fr": "Envoyer"
      },
      "submit_message_legal_2": {
        "en": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "de": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "fr": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>"
      },
      "submit_btn_legal_3": {
        "en": "Submit",
        "de": "Absenden",
        "fr": "Envoyer"
      },
      "hs_email_legal_3": {
        "en": "Email",
        "de": "E-Mail-Adresse",
        "fr": "Adresse e-mail"
      },
      "submit_message_legal_3": {
        "en": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "de": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>",
        "fr": "<p>Thank you for your interest.</p> <p>Please check your inbox for confirmation email!</p>"
      },
      "hs_how_did_you_hear_about_bloomreach_": {
        "en": "How did you hear about Bloomreach?",
        "de": "Wie haben Sie über Bloomreach erfahren?",
        "fr": "Comment avez-vous entendu parler de Bloomreach ?"
      },
    }

    var getLangFull = window.location.pathname.slice(0,4);
    var getLang = getLangFull.slice(1,-1);

    // fields
    jQuery('.hs_firstname label span:not(.hs-form-required)').html(allTranslations['hs_firstname'][getLang]);
    jQuery('.hs_lastname label span:not(.hs-form-required)').html(allTranslations['hs_lastname'][getLang]);
    jQuery('.hs_email label span:not(.hs-form-required)').html(allTranslations['hs_email'][getLang]);
    jQuery('.hs_company label span:not(.hs-form-required)').html(allTranslations['hs_company'][getLang]);
    jQuery('.hs_phone label span:not(.hs-form-required)').html(allTranslations['hs_phone'][getLang]);
    jQuery('.hs_jobtitle label span:not(.hs-form-required)').html(allTranslations['hs_jobtitle'][getLang]);
    jQuery('.hs_country_select label span:not(.hs-form-required)').html(allTranslations['hs_country_select'][getLang]);
    jQuery('.hs_online_revenue label span:not(.hs-form-required)').html(allTranslations['hs_online_revenue'][getLang]);
    jQuery('.hs_online_revenue option:nth-child(2)').html(allTranslations['hs_online_revenue_option_title_1'][getLang]);
    jQuery('.hs_online_revenue option:nth-child(3)').html(allTranslations['hs_online_revenue_option_title_2'][getLang]);
    jQuery('.hs_online_revenue option:nth-child(4)').html(allTranslations['hs_online_revenue_option_title_3'][getLang]);
    jQuery('.hs_online_revenue option:nth-child(5)').html(allTranslations['hs_online_revenue_option_title_4'][getLang]);
    jQuery('.hs_i_am_from label span:not(.hs-form-required)').html(allTranslations['hs_i_am_from'][getLang]);
    jQuery('.hs_i_am_from option:nth-child(2)').html(allTranslations['hs_i_am_from_option_title_1'][getLang]);
    jQuery('.hs_i_am_from option:nth-child(3)').html(allTranslations['hs_i_am_from_option_title_2'][getLang]);
    jQuery('.hs_i_am_from option:nth-child(4)').html(allTranslations['hs_i_am_from_option_title_3'][getLang]);
    jQuery('.hs_i_am_from option:nth-child(5)').html(allTranslations['hs_i_am_from_option_title_4'][getLang]);
    jQuery('.hs_integration_name label span:not(.hs-form-required)').html(allTranslations['hs_integration_name'][getLang]);
    jQuery('.hs_module_interest label span:not(.hs-form-required)').html(allTranslations['hs_module_interest'][getLang]);
    jQuery('#message-a562839d-2d71-4330-9180-b19081816626').closest('.hs_message').find('label span:not(.hs-form-required)').html(allTranslations['hs_message_1'][getLang]);
    jQuery('.hs_how_did_you_hear_about_bloomreach_ label span:not(.hs-form-required)').html(allTranslations['hs_how_did_you_hear_about_bloomreach_'][getLang]);
    jQuery('.hs-form .hs_message label:contains("Message")').html(allTranslations['hs_message'][getLang]);
    jQuery('.hs_demo_checkbox label span:not(.hs-form-required)').html(allTranslations['hs_demo_checkbox'][getLang]);
    jQuery('.hs_contact_us_form_option option:nth-child(2)').html(allTranslations['hs_contact_us_form_option_1'][getLang]);
    jQuery('.hs_contact_us_form_option option:nth-child(3)').html(allTranslations['hs_contact_us_form_option_2'][getLang]);
    jQuery('.hs_contact_us_form_option option:nth-child(4)').html(allTranslations['hs_contact_us_form_option_3'][getLang]);
    jQuery('.hs_contact_us_form_option option:nth-child(5)').html(allTranslations['hs_contact_us_form_option_4'][getLang]);

    // submit
    jQuery('input[value="Schedule My Demo"]').attr('value', allTranslations['submit_btn_req_demo'][getLang]);
    jQuery('input[value="Submit"]').attr('value', allTranslations['hs_submit'][getLang]);
    jQuery('input[value="Request Pricing"]').attr('value', allTranslations['submit_btn_pricing'][getLang]);
    jQuery('input[value="Get In Touch"]').attr('value', allTranslations['submit_btn_getintouch'][getLang]);
    jQuery('input[value="Get Early Access"]').attr('value', allTranslations['submit_get_early_access'][getLang]);
    jQuery('input[value="View the Report"]').attr('value', allTranslations['submit_btn_view_report'][getLang]);
    
    // legal
    jQuery('div[class^="hs_LEGAL_CONSENT"] label p').html(allTranslations['hs-dependent-field'][getLang]);
    jQuery('.hs-form p:contains("By submitting this form")').html(allTranslations['hs-richtext_legal_1'][getLang]);
    // forms translate END

	}
});


// GTM START
window.dataLayer = window.dataLayer || [];

function get_cookie_value(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function sendCookiesGtag(eventname, functional, analytics, ad){

    var fullEventName = 'none';

    if(eventname == 'ready'){
        fullEventName = 'brCookieConsent_ready';
    }
    if(eventname == 'update'){
        fullEventName = 'brCookieConsent_update';
    }

    dataLayer.push({
        'event': fullEventName,
        'consent_functional': functional,
        'consent_analytics': analytics,
        'consent_ad': ad
    });

}

document.addEventListener("DOMContentLoaded", function() {

    var cookieyesConsent = get_cookie_value('cookieyes-consent');
    var cookieFunctional = cookieAnalytics = cookieAd = false;

    if(cookieyesConsent.includes('functional:yes')){
        cookieFunctional = true;
    }
    if(cookieyesConsent.includes('analytics:yes')){
        cookieAnalytics = true;
        window.runTracking = true;
    }
    if(cookieyesConsent.includes('advertisement:yes')){
        cookieAd = true;
    }

    sendCookiesGtag('ready', cookieFunctional, cookieAnalytics, cookieAd);

});

document.addEventListener("cookieyes_consent_update", function (eventData) {
        var granted = eventData.detail.accepted;

        var cookieFunctional = granted.includes('functional') ? true : false;
        var cookieAnalytics = granted.includes('analytics') ? true : false;
        var cookieAd = granted.includes('advertisement') ? true : false;

        sendCookiesGtag('update', cookieFunctional, cookieAnalytics, cookieAd);
        if(cookieAnalytics){
            window.runTracking = true;
        }
});
// GTM END

// Engagement START
function makeID(length) {
    let uuid = "";
    let possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++)
        uuid += possible.charAt(Math.floor(Math.random() * possible.length));
    return uuid;
}

function getLanguage() {
    let getLang = window.location.pathname.substring(0, 3);
    if (getLang === '/en') getLang = 'EN';
    else if (getLang === '/fr') getLang = 'FR';
    else if (getLang === '/de') getLang = 'DE';
    else getLang = 'undefined';
    return getLang;
}

function getParam(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

function exponeaTrack() {
    const path = window.location.pathname, pathLevels = {};
    path.split('/').map((level, id) => {
        if (id > 0 && id < 6) pathLevels[`path_level_${id}`] = level;
    });

    window.exponeaDefaultProps = {
        uuid: makeID(16),
        language: getLanguage(),
        domain: window.location.host,
        path_default: jQuery('head link[hreflang="en"]').attr('href')?.split('3000')[1] ||
            jQuery('head link[hreflang="x-default"]').attr('href')?.split('3000')[1],
        path,
        path_level_1: pathLevels.path_level_1 || null,
        path_level_2: pathLevels.path_level_2 || null,
        path_level_3: pathLevels.path_level_3 || null,
        path_level_4: pathLevels.path_level_4 || null,
        path_level_5: pathLevels.path_level_5 || null,
        parameters: window.location.search,
        utm_source: getParam('utm_source'),
        utm_campaign: getParam('utm_campaign'),
        utm_medium: getParam('utm_medium'),
        utm_term: getParam('utm_term'),
        utm_content: getParam('utm_content'),
        gclid: getParam('gclid'),
        user_agent: window.navigator.userAgent,
        referrer: document.referrer,
        browser_language: window.navigator.userLanguage || window.navigator.language,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight
    }

    if (window.location.href.indexOf("/en/thank-you-csat") > -1) {
        // Thank you project from https://cassoviacode.atlassian.net/browse/BLOOM-306
        token = "a2a36816-c025-11e5-93a8-141877340e97";

        !function(e,n,t,i,o,r){function a(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var c=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","getSegments","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers","_preInitialize"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.5.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var l,f=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||c,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?l=a(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(l=a(e.cookies.expires.tracking))),l&&l<new Date&&(l=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(l?"&cookie-expires="+Math.floor(l.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,a,c){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[c].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[a]._revealPage=u}(f,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){var i;(null===(i=t.experimental)||void 0===i?void 0:i.non_personalized_weblayers)&&e[n]._preInitialize(t),e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
            target: "https://api.exponea.com",
            token: token,
            track: {
                google_analytics: false,
            },
        });
        exponea.start();
    } else {
        if (window.location.href.indexOf("localhost:8000") > -1) {
            token = "d00cbfe6-f3c2-11ec-8a82-9ee4816ba2ac"; // STAGE
        } else if (window.location.href.indexOf("env-bloomreach") > -1) {
            token = "d00cbfe6-f3c2-11ec-8a82-9ee4816ba2ac"; // STAGE
        } else if (window.location.href.indexOf("bloomreach.local") > -1) {
            token = "d00cbfe6-f3c2-11ec-8a82-9ee4816ba2ac"; // STAGE
        } else if (window.location.href.indexOf("bloomreach.com") > -1) {
            token = "2e7a487e-17e9-11ed-a61d-522fe36296f3"; // LIVE
        }

        if (typeof exponea === 'undefined') {
            !function(e,n,t,i,r,o){function s(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,c="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var r=t.getElementsByTagName(n)[0];return r.parentNode.insertBefore(i,r),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}o.target=o.target||"https://api.exponea.com",o.file_path=o.file_path||o.target+"/js/exponea.min.js",r[n]=p(["anonymize","initialize","identify","getSegments","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers","_preInitialize","_initializeConfig"]),r[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),r[n].segments=p(["subscribe"]),r[n]["snippetVersion"]="v2.7.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(r,n,"performance"),function(e,n,t,i,r,o){e[r]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(o.exec(n.cookie)||["","new"])[1],path:t.target}}(r,e,o,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(o,t,e),function(e,n,t,i,r,o,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var l,f=e.new_experiments.hide_class||c,_=e.new_experiments.timeout||a,g=encodeURIComponent(o.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?l=s(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(l=s(e.cookies.expires.tracking))),l&&l<new Date&&(l=void 0);var d=e.target+"/webxp/"+n+"/"+o[t].sign+"/modifications.min.js?http-referer="+g+"&timeout="+_+"ms"+(l?"&cookie-expires="+Math.floor(l.getTime()/1e3):"");"sync"===e.new_experiments.mode&&o.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,r){t[r][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[r][n]),i.writeln("<"+n+">!"+r+".init && document.writeln("+r+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(d,n,o,p,t):function(e,n,t,i,r,o,s,a){o.documentElement.classList.add(e);var c=m(t,i,o);function p(){r[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,o)}function u(){o.documentElement.classList.remove(e)}c.onload=p,c.onerror=p,r.setTimeout(u,n),r[s]._revealPage=u}(f,_,d,n,o,p,r,t)}}(o,t,i,0,n,r,e),function(e,n,t){var i;e[n]._initializeConfig(t),(null===(i=t.experimental)||void 0===i?void 0:i.non_personalized_weblayers)&&e[n]._preInitialize(t),e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(r,n,o)}(document,"exponea","script","webxpClient",window,{
                target: "https://api.exponea.com",
                token: token,
                experimental: {
                  non_personalized_weblayers: true
                },
                new_experiments: {
                  mode: "sync",
                  hide_class: "xnpe_async_hide",
                  timeout: 5000
                },
                track: {
                    visits: false,
                    default_properties: {
                        ...window.exponeaDefaultProps
                    }
                }
            });
            exponea.start();
        }
    }
}
exponeaTrack();
// Engagement END
