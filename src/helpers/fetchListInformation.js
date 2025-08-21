const aredlApi =
  "https://kf-list-orangetan3422s-projects.vercel.app/api/aredl/levels/";
const gddlApi = "https://kf-list-orangetan3422s-projects.vercel.app/api/level/";

async function fetchFromUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`response status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching URL:", url, error);
    return null;
  }
}

export default async function fetchListInformation() {
  const mainlist = [];

  const data = await fetchFromUrl("/hardest-info.json");
  const listData = data?.main_list;
  if (!listData || listData.length === 0) {
    console.warn("No IDs found in main_list");
    return mainlist;
  }

  for (let i = 0; i < listData.length; i++) {
    const id = listData[i];
    const gddlData = await fetchFromUrl(`${gddlApi}${id}`);

    let aredlData = null;
    if (gddlData?.Meta?.Difficulty === "Extreme") {
      aredlData = await fetchFromUrl(`${aredlApi}${id}`);
    }

    if (!gddlData) continue;

    const levelObject = {
      id,
      name: gddlData.Meta.Name,
      difficulty: gddlData.Meta.Difficulty,
      aredl_rank: aredlData ? aredlData.position : null,
      position: i + 1,
    };

    mainlist.push(levelObject);
  }
  return mainlist;
}
