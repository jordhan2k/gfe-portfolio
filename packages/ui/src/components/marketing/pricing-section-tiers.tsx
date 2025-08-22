import { capitalize } from "#dep/lib/utils";
import { TabButton, TabList, TabPanel, Tabs } from "../ui/tab-menu";
import { PricingCard, PricingCardProps } from "./pricing-card";

type PlanType = {
  type: 'monthly' | 'annually';
  plans: PricingCardProps[];
}


type PricingSectionTiersProps = {
  supportingText?: string;
  title: string;
  description: string;
  plans: PlanType[]
}
function PricingSectionTiers({
  description,
  title,
  supportingText,
  plans
}: PricingSectionTiersProps) {
  return (
    <section
      className="ui:flex ui:flex-col ui:gap-y-16 ui:w-full ui:bg-white ui:shadow-sm ui:rounded-[0.25rem] ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4 ui:md:py-16 ui:xl:px-24 ui:xl:py-24"
    >
      <div className="ui:text-center">
        <div className="ui:text-indigo-700 ui:text-base ui:font-semibold ui:mb-3">
          {supportingText}
        </div>
        <h2 className="ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold ui:mb-5">
          {title}
        </h2>
        <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl ui:font-normal">
          {description}
        </p>
      </div>
      <Tabs defaultValue={"monthly"} className="ui:gap-12 ui:md:gap-16">
        <TabList className="ui:justify-center ui:md:gap-8">
          {
            plans.map((planGroup) => (
              <TabButton className="ui:flex-1 ui:md:flex-none ui:md:w-[8.75rem] " key={`${planGroup.type}-tab`} value={planGroup.type}>{capitalize(planGroup.type)}</TabButton>
            ))
          }
        </TabList>
        {
          plans.map((planGroup) => (
            <TabPanel
              key={`${planGroup.type}-tab`} value={planGroup.type}
              className="ui:grid ui:grid-cols-4 ui:md:grid-cols-6 ui:xl:grid-cols-12 ui:gap-x-4 ui:md:gap-x-8 ui:gap-y-8"
            >
              {planGroup.plans.map((plan) => (
                <PricingCard
                  key={`${planGroup.type}-${plan.plan}`}
                  className="ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-4"
                  {...plan}
                  type={planGroup.type}
                />
              ))
              }
            </TabPanel>
          ))
        }
      </Tabs>
    </section>
  )
}

export { PricingSectionTiers, type PricingSectionTiersProps, type PlanType };

