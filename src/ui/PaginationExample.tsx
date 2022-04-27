import { Box } from '../components/Box';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { Divider } from '../components/Divider';
import { Pagination } from '../components/Pagination';
import { Text } from '../components/Typography';
import React, { useEffect, useState } from 'react';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const itemsPerPage = 4;

const Example = () => {
    const [currentItems, setCurrentItems] = useState([]) as any;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(items.slice(itemOffset, endOffset));
    }, [itemOffset]);

    const handlePageClick = (event: any, direction?: number) => {
        if (event.selected >= 0) {
            const newOffset = (event.selected * itemsPerPage) % items.length;

            setItemOffset(newOffset);
            setCurrentPage(event.selected);
        } else if (direction === 1 && currentPage > 0) {
            const newPage = currentPage - 1;
            const newOffset = (newPage * itemsPerPage) % items.length;

            setItemOffset(newOffset);
            setCurrentPage(newPage);
        } else if (direction === 2 && currentPage < pageCount - 1) {
            const newPage = currentPage + 1;
            const newOffset = (newPage * itemsPerPage) % items.length;

            setItemOffset(newOffset);
            setCurrentPage(newPage);
        }
    };

    return (
        <DesignSystemProvider>
            <Box mt={1}>
                <Text mb={0.5} medium>
                    Example Items
                </Text>
                {currentItems?.length > 0 &&
                    currentItems.map((item: any, index: number) => (
                        <div key={index}>
                            <h3>Item #{item}</h3>
                        </div>
                    ))}
                <Text mt={1}>Current Page: {currentPage + 1}</Text>
            </Box>
            <Divider />
            <Box>
                <Pagination
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                    nextIcon="arrowRight"
                    nextLabel="Next"
                    pageCount={pageCount}
                    previousIcon="arrowLeft"
                    previousLabel="Previous"
                />
            </Box>
        </DesignSystemProvider>
    );
};

export default Example;
