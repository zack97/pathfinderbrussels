import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Get_informed: "Get informed!",
      message: "Leave a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message_placeholder: "Message",
      submit: "Submit",
      sending: "Sending...",
      more: "More",
      Medication: "Medication",
      Food: "Food",
      Accomodation: "Accomodation",
      Hygiene: "Hygiene",
      Legal_safety: "Legal & Safety Info",
      More: "More",
      Language_learning: "Language Learning Locations",
      Psychological_help: "Psychological Help",
      Education: "Education",
      Scolarships: "Scholarships",
      Social_activities: "Social and Cultural Activities",
      Sports: "Sports",
      English: "English",
      French: "French",
      dedicated_message:
        "We are dedicated to helping you navigate the resources available in your area. Whether you’re seeking assistance, free food, shelter, or other essential services, you’ve come to the right place. Our goal is to connect you with the help you need, when you need it. Explore our platform, discover local services, and find the support that can make a difference in your life. Together, we can build a stronger community!",
      guiding_message:
        "In every corner, help is near, A guiding light to calm your fear. With open doors and hearts that care, We find the strength to rise and share. Together, we can all be clear. When life feels hard, and hope is thin, Our doors are open, let’s begin. For in the heart, we find the key, To rise as one, to be set free. With every step, together we stand, A world of kindness, hand in hand.",
      Check_Locations: "Check Locations",
      about_us: "About us",
      Terms: "Terms and privacy",
      Feedback: "Feedback and Support",
      rigths: "all rigths reserved",
      locations_here: "locations here",
      More_here: "More here",
      head_medication: "MEDICATION / DOCTOR / HEALTH",
      medication_text: `Medication or being able to see a doctor is a basic need and
              essential for every life. For new arrivals in Brussels, this gets
              so complicated. Medication is a Fundamental Human right and for
              all those seeking International Protection, present to Public
              Hospital your Annex 26, this acts as your identity card and the
              billing information will automatically be sent to Fedasil. For the
              other NGO Medical Centre, you are advised to carry your annex Form
              too. Below are a list of Public Hospitals, Free clinics that you
              can seek Medical Support.`,
      visite: "Visit Website",
      head_food: "FOOD / FEEDING",
      food_text: `Imagine the unimaginable adverse effects of Lack of Food !!, As a
              new comer this can be an issue for, the first days 
              or even months Below you find a List of Locations you can go and
              get a free Hot meal.`,
      accomodation: "ACCOMODATION",
      accomodation_text: ` Finding a safe place can be challenging, especially when resources
              are limited. This page connects you with the best available free
              organizations and resources that can help you find some solutions.`,
      hygiene: ` Maintaining good hygiene is essential for your health and well-being. This hygiene page provides
             information and resources to help you access essential hygiene products and services
              `,
      legal_head: " Legal Support / Lawyer ",
      legal_text: `It is key to have legal information about your situation and
              everyone deserves a right to be heard and represented 
              by a Lawyer. You can find below Organisations where they can offer
              Legal advise or link you directly to a Lawyer freely.`,
      lang_head: "LANGUAGE",
      lang_text: ` Discover the world of language learning with this comprehesive
              page. Find information on free language classes, online platforms,
              and language exchange opportunities. Whether you're interested in
              French, Dutch or English, below are some resources to start your
              journey."`,
      psy_head: "MENTAL HEALTH",

      psy_text: `Psycological support is a vital part of mental health and
              treatment that very many people tend to ignore
             yet very important for personal development and helpful to
              get your brain set to pursue other goals
           despite of a disturbing mental state. Below is a list of
              organisations offering this useful service 
              free of charge `,
      scola_head: " SCHOLARSHIPS",
      scola_text: `Scholarships always come as a burden reliever and so important to pursue higher studies, below
are some of higher institutions that have Refugee scholarship programs,
reach out to find out more about eligibility`,
      social_head: " SOCIAL AND CULTURE SERVICES",
      social_text: `Engaging in social and cultural activities is essential for building connections, fostering integration, and enriching your life. Below are some of the organisations that may be suitable for this, dont miss out on the opportunity to intergrate in the society
`,
    },
  },
  fr: {
    translation: {
      Get_informed: "Soyez informé!",
      message: "Laissez un message",
      name: "Nom",
      email: "Email",
      subject: "Objet",
      message_placeholder: "Message",
      submit: "Soumettre",
      sending: "Envoi...",
      more: "Plus",
      Medication: "Médicaments",
      Food: "Nourriture",
      Accomodation: "Hébergement",
      Hygiene: "Hygiène",
      Legal_safety: "Informations juridiques et de sécurité",
      More: "Plus",
      Language_learning: "Apprentissage des langues",
      Psychological_help: "Aide psychologique",
      Education: "Éducation",
      Scolarships: "Bourses",
      Social_activities: "Activités sociales et culturelles",
      Sports: "Sports",
      English: "Anglais",
      French: "Français",
      dedicated_message:
        "Nous sommes dédiés à vous aider à naviguer parmi les ressources disponibles dans votre région. Que vous cherchiez de l'aide, de la nourriture gratuite, un abri ou d'autres services essentiels, vous êtes au bon endroit. Notre objectif est de vous connecter à l'aide dont vous avez besoin, au moment où vous en avez besoin. Explorez notre plateforme, découvrez les services locaux",
      guiding_message:
        "Dans chaque coin, l'aide est proche, Une lumière guidante pour apaiser ta peur. Avec des portes ouvertes et des cœurs bienveillants, Nous trouvons la force de nous élever et de partager. Ensemble, nous pouvons être clairs. Lorsque la vie semble difficile et que l'espoir est mince, Nos portes sont ouvertes, commençons. Car dans le cœur, nous trouvons la clé, Pour nous lever unis et être libres. À chaque pas, ensemble, nous restons, Un monde de bonté, main dans la main.",
      Check_Locations: "Vérifier les emplacements",
      about_us: "À propos de nous",
      Terms: "Conditions et confidentialité",
      Feedback: "Commentaires et support",
      rigths: " tous droits réservés",
      locations_here: "Emplacements ici",
      More_here: "Plus ici",
      head_medication: "MEDICATION / MEDECIN / SANTÉ",
      medication_text: `Médicaments ou la possibilité de consulter un médecin est un besoin fondamental et essentiel pour chaque vie. Pour les nouveaux arrivants à Bruxelles, cela devient très compliqué. Les médicaments sont un droit humain fondamental et pour tous ceux qui demandent une protection internationale, présentez votre Annexe 26 à l’hôpital public. Celle-ci fait office de carte d’identité et les informations de facturation seront automatiquement envoyées à Fedasil. Pour les autres centres médicaux d’ONG, il est également conseillé d’apporter votre formulaire Annexe. Vous trouverez ci-dessous une liste des hôpitaux publics et des cliniques gratuites où vous pouvez demander un soutien médical.`,
      visite: "Visiter le site",
      head_food: "NOURRITURE / ALIMENTATION",
      food_text: `Imaginez les effets néfastes inimaginables du manque de nourriture !!
En tant que nouveau venu, cela peut être un problème pour vous, durant les premiers jours ou même les premiers mois.
Ci-dessous, vous trouverez une liste d'endroits où vous pouvez aller et obtenir un repas chaud gratuit.`,
      accomodation: "HÉBERGEMENT",
      accomodation_text: `Trouver un endroit sûr peut être un défi, surtout lorsque les ressources sont limitées. Cette page vous met en contact avec les meilleures organisations gratuites et ressources disponibles qui peuvent vous aider à trouver des solutions.`,
      hygiene: ` Maintenir une bonne hygiène est essentiel pour la santé et le bien-être, mais cela peut devenir un défi sans accès aux ressources appropriées. Cette section vous oriente vers des endroits où vous pouvez trouver des produits d’hygiène gratuits ou des installations pour vous laver et prendre soin de vous.
              `,
      legal_head: "SOUTIEN JURIDIQUE / AVOCAT",
      legal_text: `Il est essentiel d'avoir des informations juridiques sur votre situation, et chacun mérite d'être entendu et représenté par un avocat. Vous trouverez ci-dessous des organisations qui peuvent vous offrir des conseils juridiques ou vous mettre directement en contact avec un avocat gratuitement.`,
      lang_head: "LANGUE",
      lang_text: `Découvrez le monde de l'apprentissage des langues avec cette page complète. Trouvez des informations sur les cours de langues gratuits, les plateformes en ligne et les opportunités d'échange linguistique. Que vous soyez intéressé par le français, le néerlandais ou l'anglais, voici quelques ressources pour commencer votre parcours.`,
      psy_head: "SANTÉ MENTALE",
      psy_text: `Le soutien psychologique est une partie vitale de la santé mentale et du traitement que beaucoup de gens ont tendance à ignorer,  mais il est très important pour le développement personnel et utile pour aider à recentrer votre esprit sur d'autres objectifs, malgré un état mental perturbé. Ci-dessous, une liste d'organisations offrant ce service utile gratuitement.`,
      scola_head: "BOURSES D'ÉTUDES",
      scola_text: `Les bourses d'études sont toujours une aide précieuse et jouent un rôle clé dans la poursuite des études supérieures. Ci-dessous, vous trouverez quelques établissements d'enseignement supérieur proposant des programmes de bourses pour les réfugiés. N'hésitez pas à les contacter pour en savoir plus sur les critères d'éligibilité.`,
      social_head: "SERVICES SOCIAUX ET CULTURELS",
      social_text: `S'engager dans des activités sociales et culturelles est essentiel pour créer des liens, favoriser l'intégration et enrichir votre vie. Voici quelques organisations qui pourraient vous convenir. Ne manquez pas l'opportunité de vous intégrer dans la société.`,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  keySeparator: false, // Disable key separator for dot notation
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
