/**
 * ============================================================================
 * THORVON TALENT — AUDIENCE & DISTRIBUTION METRICS CONFIGURATION
 * A Creator Management & Talent Partnerships Division of Thorvon Media
 *
 * OPERATIONS GUIDE:
 * All figures in this file are manually verified and maintained by the
 * Thorvon Talent management team.
 *
 * TO UPDATE METRICS:
 * 1. Change the numeric value for any metric below.
 * 2. If a figure is unverified, missing, or under audit, set `value: null`.
 *    The widget will automatically display an em dash ("—") without breaking.
 * 3. Update `reportingPeriod` and `lastUpdated` to reflect your audit window.
 * ============================================================================
 */

const ThorvonMetricsConfig = {
  // Audit & Reporting Metadata
  meta: {
    badgeLabel: "Audience & Distribution Telemetry",
    reportingPeriod: "Last 28 Days (Sep 15 – Oct 12, 2026)",
    periodDays: 28,
    lastUpdated: "October 13, 2026",
    verificationStatus: "Verified Network Telemetry",
    methodologyNote: "Gross platform reach across active roster channels; not an unduplicated unique-person count."
  },

  // 4 Primary Metric Cards
  cards: [
    {
      id: "collective_followers",
      label: "Collective Follower Base",
      value: 2450000, // 2.45M (set null for em dash '—')
      suffix: "+",
      format: "abbreviated", // 'abbreviated' (e.g. 2.4M+) | 'integer' (e.g. 18) | 'percentage'
      description: "Aggregated audience across YouTube, Instagram, and LinkedIn channels"
    },
    {
      id: "reported_reach",
      label: "28-Day Aggregated Reach",
      value: 14800000, // 14.8M
      suffix: "+",
      format: "abbreviated",
      description: "Aggregated gross platform reach reported across the roster over 28 days"
    },
    {
      id: "creator_talents",
      label: "Represented Creator Talents",
      value: 18,
      suffix: "",
      format: "integer",
      description: "Voices, podcast hosts, and specialists under management"
    },
    {
      id: "partner_pages",
      label: "Active Partner Media Pages",
      value: 34,
      suffix: "+",
      format: "integer",
      description: "Thorvon Media distribution pages & community channels"
    }
  ],

  // Combined Network Engagement Summary (for same 28-day reporting period)
  engagementSummary: {
    // Total interactions across roster (likes, comments, shares, saves)
    totalInteractions: {
      label: "Compatible Network Interactions",
      value: 782000, // 782K+ (or null for '—')
      suffix: "+",
      format: "abbreviated"
    },

    // Calculated reach-based engagement rate
    // Note: Only calculated when both reach and interactions are available and comparable
    engagementRate: {
      label: "Reach-Based Engagement Rate",
      value: 5.28, // 5.28% (or null for '—')
      suffix: "%",
      format: "percentage",
      calculationFormula: "Total Interactions ÷ Aggregated Gross Reach"
    },

    // Accounts included in this reporting period
    includedAccounts: "18 represented creator rosters + 34 Thorvon Media distribution partner pages",

    // Integrity and methodology disclaimer
    disclaimer: "Figures are compiled from authentic, native platform analytics across active creator accounts. Reach denotes gross platform exposures across the 28-day window and does not represent an unduplicated unique audience count."
  }
};

// CommonJS export support for automated test suites
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThorvonMetricsConfig;
}
