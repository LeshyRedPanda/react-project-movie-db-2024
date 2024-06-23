import React, {FC} from "react";


interface PaginationCompProps {
    currentPage: number,
    totalPages: number,
    pageChange: (newPage: number) => void;
}


export const PaginationComp: FC<PaginationCompProps> = ({currentPage, totalPages, pageChange}) => {

    // console.log( 'current page:', currentPage)

    const prevPage = () => {
        if (currentPage >= 1) {
            pageChange(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < totalPages) {
            pageChange(currentPage + 1);
        }
    };

    return (
        <div className={'paginationWrap'}>
            <button className={'pagePaginationBtn'} onClick={prevPage} disabled={currentPage === 1}>
                Prev page
            </button>
            <div className={'pageIndicatorWrap'}>
            <span className={"pageIndicator"}>
        {currentPage > 1 && (
            <span className={"prevPage paginationIndicator"}>{currentPage - 1}</span>
        )}
                <span className={"currentPage paginationIndicator"}>{currentPage}</span>
                {currentPage < totalPages && (
                    <span className={"nextPage paginationIndicator"}>{currentPage + 1}</span>
                )}
      </span>
            </div>
            <button className={'pagePaginationBtn'} onClick={nextPage} disabled={currentPage === totalPages}>
                Next page
            </button>
        </div>
    )

}