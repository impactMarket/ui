/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable sort-keys */
import { Avatar } from '../components/Avatar';
import { Box } from '../components/Box';
import { CircledIcon } from '../components/CircledIcon';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { Pagination } from '../components/Pagination';
import { Table } from '../components/Table';
import { Text } from '../components/Typography';
import { TextLink } from '../components/TextLink';
import React, { useEffect, useRef, useState } from 'react';

const columns = [
    {
        title: 'Beneficiary',
        value: 'name',
        width: '30%',
        minWidth: 14,
        render: (data: any) => (
            <Box fLayout="center start" flex>
                {!!data.image ? <Avatar url={data.image} /> : <CircledIcon icon="user" />}
                <Box pl={0.75}>
                    {!!data.name && (
                        <Text g800 semibold small>
                            {data.name}
                        </Text>
                    )}
                    <Text p500 small>
                        {data.address}
                    </Text>
                </Box>
            </Box>
        )
    },
    {
        title: 'Added on',
        value: 'added_on',
        sortable: true,
        width: '15%',
        minWidth: 4,
        render: (data: any) => (
            <Text g500 small>
                {data.added_on?.toLocaleString('pt-PT')}
            </Text>
        )
    },
    {
        title: 'Claimed',
        value: 'claimed',
        width: '20%',
        minWidth: 8,
        sortable: true,
        render: (data: any) => (
            <Text g500 small>
                ${data.claimed}
            </Text>
        )
    },
    {
        title: 'City',
        value: 'city',
        sortable: true,
        width: '20%',
        minWidth: 8
    },
    {
        width: '15%',
        minWidth: 8,
        render: (data: any) => (
            <TextLink onClick={() => alert(`You clicked element: ${data.address}`)} p500>
                Click me
            </TextLink>
        )
    }
];

const rows = [
    {
        name: 'Ana',
        claimed: 34,
        city: 'London',
        image: 'https://picsum.photos/120',
        address: '0x43D2...a12f7',
        added_on: new Date('2016-03-10 09:32:15')
    },
    {
        name: 'Pedro',
        claimed: 20.23,
        city: 'Lisboa',
        image: 'https://picsum.photos/120',
        address: '0xA1C6...a1232',
        added_on: new Date('2015-07-24 11:24:01')
    },
    {
        claimed: 100,
        city: 'Porto',
        address: '0x23A2...b2f34',
        added_on: new Date('2021-12-02 07:15:25')
    },
    {
        claimed: 2350,
        city: 'Madrid',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2018-04-18 19:17:45')
    },
    {
        claimed: 73.58,
        city: 'Paris',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2019-05-02 20:13:45'),
        name: 'Juliana'
    },
    {
        claimed: 25,
        city: 'Roma',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2010-08-15 08:15:45')
    },
    {
        claimed: 45,
        city: 'Braga',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2011-10-22 11:45:45'),
        name: 'Sara'
    },
    {
        claimed: 23.5,
        city: 'Los Angeles',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2021-09-30 12:53:45')
    },
    {
        claimed: 180,
        city: 'Barcelona',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2017-12-23 17:03:45'),
        name: 'Miguel'
    },
    {
        claimed: 215.23,
        city: 'San Francisco',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2018-01-10 20:47:45')
    },
    {
        claimed: 39.5,
        city: 'Nice',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2019-03-01 18:05:45'),
        name: 'José'
    },
    {
        claimed: 10,
        city: 'Berlim',
        image: 'https://picsum.photos/120',
        address: '0x1BD5...c1a3f',
        added_on: new Date('2020-11-09 10:23:45'),
        name: 'Paula'
    }
];

const itemsPerPage = 10;

const Example = () => {
    const tableRef = useRef<null | HTMLDivElement>(null);

    // Pagination
    const [currentItems, setCurrentItems] = useState([]) as any;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    // Table
    const [sortKey, setSortKey] = useState({}) as any;

    // Pagination
    useEffect(() => {
        setPageCount(Math.ceil(rows.length / itemsPerPage));
    }, []);

    // Table & Pagination
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        if (sortKey?.key) {
            rows.sort((a: any, b: any) => {
                const x = a[sortKey.key];
                const y = b[sortKey.key];

                if (sortKey.sortDesc) {
                    return x < y ? 1 : x > y ? -1 : 0;
                }

                return x < y ? -1 : x > y ? 1 : 0;
            });
        }

        setCurrentItems(rows.slice(itemOffset, endOffset));
    }, [itemOffset, sortKey]);

    // Pagination
    const handlePageClick = (event: any, direction?: number) => {
        let pageChanged = false;

        if (event.selected >= 0) {
            const newOffset = (event.selected * itemsPerPage) % rows.length;

            pageChanged = true;

            setItemOffset(newOffset);
            setCurrentPage(event.selected);
        } else if (direction === 1 && currentPage > 0) {
            const newPage = currentPage - 1;
            const newOffset = (newPage * itemsPerPage) % rows.length;

            pageChanged = true;

            setItemOffset(newOffset);
            setCurrentPage(newPage);
        } else if (direction === 2 && currentPage < pageCount - 1) {
            const newPage = currentPage + 1;
            const newOffset = (newPage * itemsPerPage) % rows.length;

            pageChanged = true;

            setItemOffset(newOffset);
            setCurrentPage(newPage);
        }

        // Scroll to top of table after clicking a page
        if (pageChanged && tableRef && tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Table
    const handleSort = (key: string) => {
        setSortKey({ key, sortDesc: sortKey?.key === key ? !sortKey?.sortDesc : false });
    };

    return (
        <DesignSystemProvider>
            <Box mt={1} ref={tableRef}>
                <Table
                    columns={columns}
                    handleSort={handleSort}
                    pagination={
                        <Pagination
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                            nextIcon="arrowRight"
                            nextLabel="Next"
                            pageCount={pageCount}
                            previousIcon="arrowLeft"
                            previousLabel="Previous"
                        />
                    }
                    rows={currentItems}
                    sortKey={sortKey}
                />
            </Box>
        </DesignSystemProvider>
    );
};

export default Example;
