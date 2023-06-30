import Chip from '@/components/Chip';
import EventItemCard from '@/components/EventItemCard';
import { pyeonImage } from '@/dummy/image';
import React from 'react';

const eventCategory = ['1+1', '2+1', '할인', '덤'];

const EventItemSection = () => {
  return (
    <div className="px-[20px]">
      <div className="pb-[18px] pt-[40px]">
        <span className="text-[1.375rem] font-bold">이번주 행사 품목</span>
      </div>
      <div className="pb-[29px]">
        <Chip>
          {eventCategory.map((item, index) => (
            <Chip.Item myIndex={index} key={index} text={item} />
          ))}
        </Chip>
      </div>
      <div className="flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <EventItemCard
            key={i}
            eventItem={{
              eventType: 'ONE_PLUS_ONE',
              imageUrl: pyeonImage,
              price: 20000,
              title: 'asdfasdf',
              convenience: '7Eleven',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventItemSection;