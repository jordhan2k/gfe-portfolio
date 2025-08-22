'use client'

import { cn } from '#dep/lib/utils'
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';



const paginationButtonVariants = cva(
  'ui:px-4 ui:rounded-[0.25rem] ui:h-9 ui:flex ui:items-center ui:text-sm ui:font-medium ui:text-neutral-600 ',
  {
    variants: {
      variant: {
        index: '',
        nav: 'ui:gap-2',
      },
      iconOnly: {
        true: null,
        false: null
      },
      active: {
        true: 'ui:shadow-sm',
        false: ''
      },
      disabled: {
        true: 'ui:cursor-not-allowed ui:text-neutral-400',
        false: 'ui:cursor-pointer ui:hover:shadow-sm ui:focus-visible:outline-none ui:focus-visible:ring-4 ui:focus-visible:ring-indigo-800/20'
      }
    },
    compoundVariants: [
      {
        variant: "nav",
        iconOnly: true,
        class: 'ui:px-2.5 ui:[&_>span]:hidden'
      }
    ],
    defaultVariants: {
      // default variant values can be set here
    },
  }

)


function PaginationButton({
  className,
  variant = 'index',
  iconOnly = false,
  disabled,
  active = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof paginationButtonVariants>) {
  return (
    <button disabled={disabled} className={cn(paginationButtonVariants({ variant, iconOnly, disabled, active, className }))}  {...props} />
  )
}

function Ellipsis() {
  return <div className="ui:h-9 ui:flex ui:items-center ui:px-2">...</div>
}


type PaginationItemType = { page?: number; id?: string }


function Pagination({
  iconOnly,
  className,
  totalPages = 1,
  initialPage = 1,
  disabled = false,
  ...props
}: React.ComponentProps<'div'> &
  {
    iconOnly?: boolean;
    className?: string;
    totalPages?: number;
    initialPage?: number;
    onPageChange?: (page: number) => void;
    disabled?: boolean;
  }) {
  const [currentPage, setCurrentPage] = React.useState(initialPage);

  const paginationButtons = useMemo(() => {

    const buttons: PaginationItemType[] = [];

    buttons.push({ page: 1 });
    if (currentPage === totalPages && totalPages >= 5) {
      buttons.push({ page: 2 });
    }
    if (currentPage > 3) buttons.push({ id: 'ellipsis-1' });
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) {
      buttons.push({ page: i });
    }
    if (currentPage < totalPages - 2) buttons.push({ id: 'ellipsis-2' });
    if (currentPage === 1 && totalPages >= 5) {
      buttons.push({ page: totalPages - 1 });
    }
    buttons.push({ page: totalPages });
    return buttons;

  }, [totalPages, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const handlePrevButton = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      if (props.onPageChange) props.onPageChange(currentPage - 1);
    }
  }
  const handleNextButton = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      if (props.onPageChange) props.onPageChange(currentPage + 1);
    }
  }
  return (
    <div className={cn('ui:flex ui:py-3', className)} {...props}>
      <PaginationButton
        variant='nav'
        aria-label='Previous button'
        iconOnly={iconOnly}
        disabled={currentPage === 1 || disabled}
        onClick={handlePrevButton}
      ><RiArrowLeftSLine /><span>Previous</span></PaginationButton>
      {
        paginationButtons.map((item) => {
          const page = item.page ?? undefined;
          const isActive = currentPage === page;
          return !item?.page ?
            <Ellipsis key={item?.id} />
            : (
              <PaginationButton
                key={`page-button-${item.page}`}
                variant='index'
                onClick={() => {
                  page && handlePageChange(page)
                }}
                disabled={disabled}
                active={isActive}
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </PaginationButton>
            )
        })
      }
      <PaginationButton
        variant='nav'
        aria-label='Next button'
        iconOnly={iconOnly}
        disabled={currentPage === totalPages || disabled}
        onClick={handleNextButton}
      ><span>Next</span><RiArrowRightSLine /></PaginationButton>
    </div>
  )
}

export { Pagination };
