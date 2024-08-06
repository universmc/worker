const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  const Projet = `"Notre projet innovant propose une solution révolutionnaire pour la formation et l'emploi, en combinant le concept de Curriculum Vitae Numérique Universel (CVNU) avec le Match in Learning. Notre vision est de créer un écosystème de développement professionnel continu, où l'apprentissage, la croissance et la contribution sont valorisés.
          En intégrant GPT-Wallet et umcTokens.sol, nous garantissons une récompense minimum mensuelle de 500 pi.coin en tant que valeur utilisateur-cv dans la blockchain. Cette approche encourage les individus à élargir leur CVNU et à se perfectionner sans cesse, tout en étant récompensés pour leur contribution.
          Nos fonctionnalités clés incluent :
          L'intégration du CVNU avec GPT-Wallet pour garantir une rémunération juste.
          Le concept de Match in Learning pour encourager l'apprentissage continu et l'évolution professionnelle.
          Une interface utilisateur intuitive pour une expérience d'apprentissage fluide et agréable.
          Grâce à notre projet, nous créons un avenir dans lequel les individus peuvent s'épanouir en équipe avec l'IA, construisant une société plus équitable et dynamique. Nous sommes convaincus que notre solution répondra aux besoins évolutifs du marché du travail, en favorisant l'apprentissage, la collaboration et l'innovation"`;

  const completion = await openai.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "assistant",
        "content": "lorsque l'utilisateur Initialise l'instance /gpt Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"
      },
      {role: "system", content: projet},
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "GPT-4o" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();