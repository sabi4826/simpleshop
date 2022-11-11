export function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsend0bmhvYWlpZmxvdGpvanF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.wkdDDAA7KWowdOyzvjLD2E5F-Pe4ZZCRCaGIAnwK9FE";
  const projectUrl = "https://hlzwtnhoaiiflotjojqx.supabase.co";
  fetch(projectUrl + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsend0bmhvYWlpZmxvdGpvanF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.wkdDDAA7KWowdOyzvjLD2E5F-Pe4ZZCRCaGIAnwK9FE",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsend0bmhvYWlpZmxvdGpvanF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.wkdDDAA7KWowdOyzvjLD2E5F-Pe4ZZCRCaGIAnwK9FE",
      prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
}
