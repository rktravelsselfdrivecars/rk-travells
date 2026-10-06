import { useState } from "react";

const englishRules = [
  "A valid Driving License and Aadhar Card are required.",
  "1 day means 24 hours. An extra hourly charge of ₹150 applies.",
  "The speed limit is 80 KM/HR. Exceeding the speed limit incurs a fine of ₹200.",
  "FASTag, tolls, and challans are the customer's responsibility.",
  "In case of any damage, the customer is fully responsible.",
  "The car must not be used for illegal activities.",
  "Drunk driving is strictly prohibited.",
  "Cars must be returned clean; otherwise, a ₹300 washing charge applies.",
  "No refund for early returns.",
];

const teluguRules = [
  "చెల్లుబాటయ్యే డ్రైవింగ్ లైసెన్స్ మరియు ఆధార్ కార్డ్ తప్పనిసరి.",
  "1 రోజు అంటే 24 గంటలు. అదనపు గంటకు ₹150 ఛార్జ్ చేయబడుతుంది.",
  "వేగ పరిమితి 80 KM/HR. వేగ పరిమితి మించితే ₹200 జరిమానా విధించబడుతుంది.",
  "ఫాస్టాగ్, టోల్స్ మరియు చలాన్లు కస్టమర్ బాధ్యత.",
  "ఏదైనా నష్టం జరిగితే, కస్టమరే పూర్తి బాధ్యత వహించాలి.",
  "కారును చట్టవిరుద్ధ కార్యకలాపాలకు ఉపయోగించరాదు.",
  "మద్యం సేవించి వాహనం నడపడం ఖచ్చితంగా నిషేధించబడింది.",
  "కార్లను శుభ్రంగా తిరిగి ఇవ్వాలి, లేదంటే ₹300 వాషింగ్ ఛార్జ్ వర్తిస్తుంది.",
  "ముందస్తుగా తిరిగి ఇస్తే రీఫండ్ లేదు.",
];

export function RulesAndRegulations() {
  const [language, setLanguage] = useState<"en" | "te">("en");

  return (
    <section id="rules-regulations" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold font-display sm:text-3xl md:text-4xl text-ink">
            Rules and Regulations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Please read our rental policies carefully before booking.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setLanguage("en")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                language === "en"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("te")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                language === "te"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              తెలుగు (Telugu)
            </button>
          </div>
        </div>

        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm">
          <ul className="space-y-6">
            {(language === "en" ? englishRules : teluguRules).map((rule, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-ink text-base sm:text-lg leading-relaxed pt-1 font-medium">
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
