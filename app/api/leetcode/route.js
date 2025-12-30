import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const username = "Auxilus08";
const endpoint = "https://leetcode.com/graphql";

async function fetchGraphQL(body) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "minimal-portfolio/leetcode-proxy",
      Referer: "https://leetcode.com/",
      Origin: "https://leetcode.com",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`LeetCode request failed: ${res.status} ${text}`);
  }

  const json = JSON.parse(text);
  if (json.errors && json.errors.length) {
    throw new Error(`LeetCode GraphQL error: ${json.errors[0].message || "unknown"}`);
  }
  return json;
}

export async function GET() {
  try {
    const profileBody = {
      query: `
        query userProfilePublicProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
              reputation
              realName
            }
            activeBadge {
              displayName
              icon
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username },
    };

    const contestBody = {
      query: `
        query contestStats($username: String!) {
          userContestRanking(username: $username) {
            rating
            globalRanking
            totalParticipants
            topPercentage
            attendedContestsCount
          }
        }
      `,
      variables: { username },
    };

    const [contestResult, profileResult] = await Promise.allSettled([
      fetchGraphQL(contestBody),
      fetchGraphQL(profileBody),
    ]);

    if (profileResult.status !== "fulfilled") {
      throw profileResult.reason || new Error("Failed to load profile");
    }

    const contestData =
      contestResult.status === "fulfilled"
        ? contestResult.value?.data?.userContestRanking
        : null;

    if (contestResult.status !== "fulfilled") {
      console.warn("LeetCode contest fetch failed", contestResult.reason);
    }

    const user = profileResult.value?.data?.matchedUser;
    const counts = user?.submitStatsGlobal?.acSubmissionNum || [];

    const getCount = (name) => {
      const entry = counts.find(
        (item) => item?.difficulty?.toLowerCase() === name.toLowerCase()
      );
      return entry?.count ?? 0;
    };

    const total = getCount("all");
    const easy = getCount("easy");
    const medium = getCount("medium");
    const hard = getCount("hard");
    const badge = user?.activeBadge ?? null;

    const response = {
      rating: contestData?.rating ?? null,
      rank: contestData?.globalRanking ?? null,
      totalParticipants: contestData?.totalParticipants ?? null,
      percentile: contestData?.topPercentage ?? null,
      attended: contestData?.attendedContestsCount ?? null,
      solved: { total, easy, medium, hard },
      badge: badge ? { name: badge.displayName, icon: badge.icon } : null,
      reputation: user?.profile?.reputation ?? null,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "cache-control": "public, s-maxage=600, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("LeetCode API error", error);
    return NextResponse.json(
      { error: "Failed to load LeetCode stats", detail: `${error}` },
      { status: 500 }
    );
  }
}
