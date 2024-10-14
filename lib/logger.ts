"use server";

export const logger = async (log: string) => {
  console.log(`${log} ${new Date().toLocaleTimeString()}`);
};

export type Logger = typeof logger;
