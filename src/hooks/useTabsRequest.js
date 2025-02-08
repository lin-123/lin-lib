import { useRequest } from "ahooks";

export default function useTabsRequest(api) {
  const { loading, data, run } = useRequest((tab) => {
    if (!tab) return null;
    return api(tab)
  }, { manual: true });

  const onChange = (curTab) => {
    run(curTab);
  }
  return { loading, data, onChange };
}
