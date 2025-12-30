"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Medal, ExternalLink } from "lucide-react";
import Link from "next/link";

const profileUrl = "https://leetcode.com/u/Auxilus08/";

export default function LeetCode() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setError(null);

    fetch("/api/leetcode", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then((json) => {
        if (!active) return;
        if (json.error) {
          setError(json.detail || json.error);
          setStatus("error");
          setData(null);
          return;
        }
        setError(null);
        setData(json);
        setStatus("loaded");
      })
      .catch((err) => {
        if (!active) return;
        setError(err?.message || "Unable to load live stats.");
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  const formatNumber = (value) => {
    if (value === null || value === undefined) return "-";
    return typeof value === "number"
      ? value.toLocaleString("en-US")
      : value;
  };

  const percentileText = () => {
    if (!data?.percentile && data?.percentile !== 0) return null;
    const value = Number(data.percentile);
    if (Number.isNaN(value)) return null;
    return `Top ${value.toFixed(2)}%`;
  };

  const summary = [
    {
      label: "Contest rating",
      value: formatNumber(data?.rating),
      pill: percentileText(),
    },
    {
      label: "Global rank",
      value:
        data?.rank && data?.totalParticipants
          ? `${formatNumber(data.rank)} / ${formatNumber(data.totalParticipants)}`
          : formatNumber(data?.rank),
    },
    {
      label: "Percentile",
      value: percentileText() || "-",
    },
    {
      label: "Contests",
      value: data?.attended ? `${data.attended} attended` : "-",
    },
  ];

  const solved = [
    { label: "Total solved", value: formatNumber(data?.solved?.total) },
    { label: "Easy", value: formatNumber(data?.solved?.easy) },
    { label: "Medium", value: formatNumber(data?.solved?.medium) },
    { label: "Hard", value: formatNumber(data?.solved?.hard) },
  ];

  const badgeName = data?.badge?.name || "Active";
  const badgeIcon = data?.badge?.icon || null;
  const statusText =
    status === "loading"
      ? "Loading live stats..."
      : status === "error"
      ? error || "Unable to load live stats right now."
      : "Updated live from LeetCode";

  return (
    <section className="grid gap-4 mt-14">
      <div className="mb-1 flex items-center justify-between flex-wrap gap-3">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-sm flex items-center gap-2"
        >
          <Medal className="h-4 w-4 text-amber-500" />
          LeetCode Stats <span className="text-foreground/80">-</span>
        </motion.h1>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-xs flex items-center gap-2 text-foreground/80"
        >
          <Link
            href={profileUrl}
            target="_blank"
            className="underline hover:text-foreground flex items-center gap-1"
            aria-label="View LeetCode profile"
          >
            View profile
            <ExternalLink className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="border rounded-2xl px-4 py-3 grid gap-3"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="border border-border/50 rounded-xl px-3 py-2 bg-card/40 grid gap-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-foreground/70">Contest rating</p>
              {percentileText() ? (
                <span className="text-[11px] bg-amber-500/15 text-amber-600 border border-amber-500/40 rounded-full px-2 py-0.5">
                  {percentileText()}
                </span>
              ) : null}
            </div>
            <p className="text-2xl font-bold leading-none">{formatNumber(data?.rating)}</p>
            <p className="text-xs text-foreground/70">
              Global rank {formatNumber(data?.rank)}
              {data?.totalParticipants
                ? ` / ${formatNumber(data.totalParticipants)}`
                : ""}
            </p>
            <p className="text-xs text-foreground/70">
              Contests attended: {formatNumber(data?.attended)}
            </p>
          </div>

          <div className="border border-border/50 rounded-xl px-3 py-2 bg-card/40 grid gap-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-foreground/70">Badge</p>
              <span className="text-[11px] bg-emerald-500/15 text-emerald-600 border border-emerald-500/40 rounded-full px-2 py-0.5">
                Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg border border-border/40 bg-card/60 flex items-center justify-center overflow-hidden">
                {badgeIcon ? (
                  <img
                    src={badgeIcon}
                    alt={badgeName}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Medal className="h-5 w-5 text-amber-500" />
                )}
              </div>
              <p className="text-sm font-semibold">{badgeName}</p>
            </div>
            <p className="text-xs text-foreground/70" aria-live="polite">
              {statusText}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-2 text-sm">
          {summary.map((item) => (
            <div
              key={item.label}
              className="border border-border/50 rounded-xl px-3 py-2 bg-card/30"
            >
              <p className="text-xs text-foreground/70">{item.label}</p>
              <p className="font-semibold text-foreground/90">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-4 gap-2 text-sm">
          {solved.map((item) => (
            <div
              key={item.label}
              className="border border-border/50 rounded-xl px-3 py-2 bg-card/50"
            >
              <p className="text-xs text-foreground/70">{item.label}</p>
              <p className="font-semibold text-foreground/90">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
