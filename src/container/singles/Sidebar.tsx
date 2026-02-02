import { TCategoryCardFull } from '@/components/CardCategory1/CardCategory1'
import WidgetAddSubscriberForm from '@/components/WidgetAddSubscriberForm/WidgetAddSubscriberForm'
import WidgetCategories from '@/components/WidgetCategories/WidgetCategories'
import WidgetSocialsFollow from '@/components/WidgetSocialsFollow/WidgetSocialsFollow'
import React, { FC } from 'react'
import AdSense from '@/components/AdSense'

export interface SidebarProps {
	className?: string
	categories: TCategoryCardFull[] | null
}

export const Sidebar: FC<SidebarProps> = ({
	className = 'space-y-6 ',
	categories,
}) => {
	return (
		<div className={`nc-SingleSidebar lg:sticky lg:top-24 ${className}`}>
			<WidgetAddSubscriberForm />

			{/* AdSense ad */}
			<AdSense client="ca-pub-4921950396384050" slot="3626005227" />

			<WidgetSocialsFollow />

			<WidgetCategories categories={categories || []} />
		</div>
	)
}
