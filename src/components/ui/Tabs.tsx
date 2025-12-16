import { useState } from 'react';
import { cn } from '../../lib/utils';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200',
              'border-b-2 -mb-px',
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className={cn(
                'ml-2 px-2 py-0.5 rounded-full text-xs',
                activeTab === tab.id
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-gray-600'
              )}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
