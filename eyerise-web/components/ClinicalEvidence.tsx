"use client";

import { motion } from "framer-motion";
import { ExternalLink, FlaskConical } from "lucide-react";

const categories = [
  {
    name: "Blue Light, Sleep & Circadian Rhythm",
    studies: [
      { title: "Blue Light and Digital Screens Revisited", tag: "REVIEW", description: "Blue light (~400–500 nm) from screens disrupts circadian rhythm, causes sleep disturbances, and is linked to metabolic dysregulation.", url: "https://pubmed.ncbi.nlm.nih.gov/39027713/" },
      { title: "Interventions to Reduce Blue Light at Night", tag: "META-ANALYSIS", description: "Systematic review: blue-light filtering lenses show small-to-medium effects on sleep efficiency and total sleep time.", url: "https://pubmed.ncbi.nlm.nih.gov/37192881/" },
      { title: "Tablet Use Delays Bedtime and Circadian Timing", tag: "RCT", description: "Unrestricted evening tablet use delays self-selected bedtime and disrupts circadian timing and alertness.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5974725/" },
      { title: "Evening Computer Screens Disrupt Sleep", tag: "PEER-REVIEWED", description: "Evening light exposure to computer screens disrupts human sleep, biological rhythms, and attention.", url: "https://pubmed.ncbi.nlm.nih.gov/28548897/" },
      { title: "Blue Light Filter Apps and Sleep Quality", tag: "OBSERVATIONAL", description: "Study of smartphone users: blue light filter applications and their effects on sleep outcomes.", url: "https://pubmed.ncbi.nlm.nih.gov/38461462/" },
      { title: "Spectral Tuning of Evening Light and Melatonin", tag: "PEER-REVIEWED", description: "Effects of spectral tuning of evening ambient light on melatonin suppression, alertness, and sleep.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5536841/" },
      { title: "Smartphone Blue Light: Randomized Trial", tag: "RCT", description: "Double-blind trial: smartphone use with vs. without blue light at night affects sleepiness and attention.", url: "https://pubmed.ncbi.nlm.nih.gov/28017916/" },
      { title: "Red vs. Blue LED Light and Melatonin", tag: "PEER-REVIEWED", description: "Comparative effects of red and blue LED light on melatonin levels during three-hour exposure.", url: "https://pubmed.ncbi.nlm.nih.gov/40430143/" },
      { title: "Color Temperature and Melatonin Production", tag: "PEER-REVIEWED", description: "Effect of color temperature on melatonin production for illumination of working environments.", url: "https://pubmed.ncbi.nlm.nih.gov/27633241/" },
    ],
  },
  {
    name: "Computer Vision Syndrome & Digital Eye Strain",
    studies: [
      { title: "Computer Vision Syndrome: Comprehensive Review", tag: "SYSTEMATIC REVIEW", description: "Literature review of CVS prevalence, symptoms, and evidence-based interventions.", url: "https://pubmed.ncbi.nlm.nih.gov/40055942/" },
      { title: "Digital Eye Strain: Updated Perspectives", tag: "REVIEW", description: "Review of digital eye strain, validated tools (CVS-Q, CVSS17), and management strategies.", url: "https://pubmed.ncbi.nlm.nih.gov/35809192/" },
      { title: "Digital Eye Strain in Young Screen Users", tag: "SYSTEMATIC REVIEW", description: "Systematic review of digital eye strain in young screen users, prevalence and risk factors.", url: "https://pubmed.ncbi.nlm.nih.gov/36977430/" },
      { title: "Computer Vision Syndrome: Meta-Analysis", tag: "META-ANALYSIS", description: "Systematic review and meta-analysis of CVS and its determinants across populations.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9743027/" },
    ],
  },
  {
    name: "Breaks, Blinking & Dry Eye",
    studies: [
      { title: "Testing the 20-20-20 Rule", tag: "PEER-REVIEWED", description: "Effects of breaks on digital eye strain, dry eye, and binocular vision.", url: "https://pubmed.ncbi.nlm.nih.gov/35963776/" },
      { title: "20-20-20 Rule: Are the Numbers Justified?", tag: "RESEARCH", description: "Critical evaluation of the evidence base for 20-20-20 break recommendations.", url: "https://pubmed.ncbi.nlm.nih.gov/36473088/" },
      { title: "Blink Software for Dry Eye in VDT Users", tag: "RCT", description: "Efficacy of blink software in improving blink rate and dry eye symptoms.", url: "https://pubmed.ncbi.nlm.nih.gov/34571605/" },
      { title: "Reduced Blinking During Screen Use", tag: "PEER-REVIEWED", description: "Marked reduction in eye blinking in dry eye patients during video display terminal use.", url: "https://pubmed.ncbi.nlm.nih.gov/14747951/" },
    ],
  },
];

export default function ClinicalEvidence() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Clinical <span className="text-blue-600">Evidence</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto mb-4">
          Backed by rigorous research and international safety standards.
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200/80 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/40">
          <FlaskConical className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">17 peer-reviewed studies</span>
          <span className="text-slate-500 dark:text-slate-400 text-xs">on blue light, circadian rhythm, and eye strain</span>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="space-y-10 mt-10">
        {categories.map((category, catIndex) => (
          <motion.section
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 pb-2 border-b border-slate-200 dark:border-zinc-700">
              {category.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.studies.map((study, i) => (
                <motion.a
                  key={study.title}
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/80 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-blue-300/60 dark:hover:border-blue-600/50 transition-all duration-200"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIndex * 0.05) + (i * 0.03) }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {study.title}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 flex-shrink-0 mt-0.5" />
                  </div>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-100/80 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 w-fit">
                    {study.tag}
                  </span>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {study.description}
                  </p>
                  <span className="mt-3 inline-block text-[10px] font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                    View study →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
