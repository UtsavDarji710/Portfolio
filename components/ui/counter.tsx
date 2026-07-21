"use client";

import CountUp from "react-countup";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function Counter({ value, suffix = "", className }: CounterProps) {
  return (
    <span className={className}>
      <CountUp
        end={value}
        duration={2.4}
        enableScrollSpy
        scrollSpyOnce
        separator=","
      />
      {suffix}
    </span>
  );
}
