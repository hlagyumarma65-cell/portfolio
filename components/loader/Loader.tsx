"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import HGBot from "./HGBot";
import BootText from "./BootText";
import ProgressBar from "./ProgressBar";

export default function Loader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
          >
            <div className="flex w-full max-w-xl flex-col items-center px-6">

              <HGBot />

              <BootText />

              <div className="mt-8 w-full">
                <ProgressBar />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}