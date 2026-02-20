"use client";

import { motion } from "framer-motion";

interface ComparisonData {
  metric: string;
  noFilter: number;
  otherApps: number;
  eyerise: number;
}

const comparisonData: ComparisonData[] = [
  {
    metric: "Blue Light Reduction",
    noFilter: 0,
    otherApps: 50,
    eyerise: 80,
  },
  {
    metric: "Improved Sleep Quality",
    noFilter: 20,
    otherApps: 60,
    eyerise: 90,
  },
  {
    metric: "Focus Time Extension",
    noFilter: 30,
    otherApps: 50,
    eyerise: 85,
  },
  {
    metric: "User Comfort Rating",
    noFilter: 40,
    otherApps: 65,
    eyerise: 95,
  },
];

export default function ComparisonChart() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-navy/10 dark:border-zinc-700">
        <div className="space-y-8">
          {comparisonData.map((data, index) => (
            <motion.div
              key={data.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-navy dark:text-white mb-3">
                {data.metric}
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {/* No Filter */}
                <div>
                  <div className="text-xs text-navy-light dark:text-gray-400 mb-2">No Filter</div>
                  <motion.div
                    className="h-8 bg-red-200 rounded-lg relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-red-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${data.noFilter}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-navy dark:text-gray-200">
                      {data.noFilter}%
                    </span>
                  </motion.div>
                </div>

                {/* Other Apps */}
                <div>
                  <div className="text-xs text-navy-light dark:text-gray-400 mb-2">Other Apps</div>
                  <motion.div
                    className="h-8 bg-yellow-200 rounded-lg relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-yellow-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${data.otherApps}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-navy dark:text-gray-200">
                      {data.otherApps}%
                    </span>
                  </motion.div>
                </div>

                {/* EyeRise */}
                <div>
                  <div className="text-xs text-navy-light dark:text-gray-400 mb-2 font-semibold">EyeRise</div>
                  <motion.div
                    className="h-8 bg-purple-200 rounded-lg relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-accent to-purple-light"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${data.eyerise}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">
                      {data.eyerise}%
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-8 pt-8 border-t border-navy/10 dark:border-zinc-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-navy-light dark:text-gray-400">
            Based on internal testing and user surveys. EyeRise outperforms alternatives across key metrics.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
