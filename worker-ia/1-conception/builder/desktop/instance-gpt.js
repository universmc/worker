const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {
        role: "system",
        content: "[Context]:('tu es un Un youtubeur Job=‘développeur Web niveau /devOps Fullstack} dans un deFi.ico sur `https://youtube.com` about You : .')"
      },
      {
        role: "assistant",
        content: "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique"
      },
      {
        role: "system",
        name:"youtuber-ia",
        content: "Bonjour, je puis-je faire pour vous youtubeur ?"
      },
      {
        role: "user",
        content: "[role]:(youtube-user)"
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.9,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "ben-gpt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();