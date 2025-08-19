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
      className="flex flex-col gap-y-16 w-full bg-white shadow-sm rounded-[0.25rem] md:rounded-md px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24"
    >
      <div className="text-center">
        <div className="text-indigo-700 text-base font-semibold mb-3">
          {supportingText}
        </div>
        <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-5">
          {title}
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl font-normal">
          {description}
        </p>
      </div>


      <Tabs defaultValue={"monthly"} className="gap-12 md:gap-16">
        <TabList className="justify-center md:gap-8">
          {
            plans.map((planGroup) => (
              <TabButton className="flex-1 md:flex-none md:w-[8.75rem] " key={`${planGroup.type}-tab`} value={planGroup.type}>{capitalize(planGroup.type)}</TabButton>
            ))
          }

        </TabList>
        {
          plans.map((planGroup) => (
            <TabPanel
              key={`${planGroup.type}-tab`} value={planGroup.type}
              className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8"
            >

              {planGroup.plans.map((plan) => (
                <PricingCard
                  key={`${planGroup.type}-${plan.plan}`}
                  className="col-span-4 md:col-span-6 xl:col-span-4"
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

export { PricingSectionTiers };

