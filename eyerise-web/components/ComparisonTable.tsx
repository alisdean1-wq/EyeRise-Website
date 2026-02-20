"use client";

import { motion } from "framer-motion";
import { COMPARISON_FEATURES } from "@/lib/constants";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <motion.table
        className="w-full border-collapse"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-left py-4 px-6 font-semibold text-slate-900">
              Feature
            </th>
            <th className="text-center py-4 px-6 font-semibold text-slate-900 bg-amber-50 rounded-t-lg">
              EyeRise
            </th>
            <th className="text-center py-4 px-6 font-semibold text-slate-600">
              Others
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_FEATURES.map((item, index) => (
            <motion.tr
              key={index}
              className="border-b border-slate-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <td className="py-4 px-6 text-slate-700">{item.feature}</td>
              <td className="py-4 px-6 text-center bg-amber-50">
                {item.eyerise ? (
                  <span className="text-amber-600 font-semibold">✓</span>
                ) : (
                  <span className="text-slate-300">—</span>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {item.others ? (
                  <span className="text-slate-400">✓</span>
                ) : (
                  <span className="text-slate-300">—</span>
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
