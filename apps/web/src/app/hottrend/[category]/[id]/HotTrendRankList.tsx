'use client';

import { Convenience } from '@/app/type';
import HotTrendCard, { HotTrendCardSkeletons } from '@/components/HotTrendItem';
import { HotTrendMapping } from '@/constants/conveniences';
import { useGetHotTrendGoods } from '@/hooks/query/useHotTrends';

interface HotTrendRankListProps {
  category: Convenience;
}

function HotTrendRankList({ category }: HotTrendRankListProps) {
  const { data } = useGetHotTrendGoods(HotTrendMapping[category]);

  return (
    <div className="mt-4 bg-white px-5 py-9">
      <div className="text-xl2 font-bold">
        <div className="flex items-center">
          이번주 [
          <div className="relative mx-2">
            <span className="relative z-10">{category}</span>
            <hr className="bg-gold bottom-5px absolute left-0 h-3 w-full" />
          </div>
          ]
        </div>
        <div>Hot Trend🔥 랭킹</div>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        {data.map((props) => (
          <HotTrendCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}

function HotTrendRankListSkeleton({ category }: HotTrendRankListProps) {
  return (
    <div className="mt-4 bg-white px-5 py-9">
      <div className="text-xl2 font-bold">
        <div className="flex items-center">
          이번주 [
          <div className="relative mx-2">
            <span className="relative z-10">{category}</span>
            <hr className="bg-gold bottom-5px absolute left-0 h-3 w-full" />
          </div>
          ]
        </div>
        <div>Hot Trend🔥 랭킹</div>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        <HotTrendCardSkeletons length={3} />
      </div>
    </div>
  );
}

HotTrendRankList.Skeleton = HotTrendRankListSkeleton;

export default HotTrendRankList;
export { HotTrendRankListSkeleton };
