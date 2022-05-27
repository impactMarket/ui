import { Col, Row } from './Grid';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from '../components/Typography';
import { colors, fonts, typography } from '../theme';
import { ease, generateProps, mq, transitions } from 'styled-gen';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled, { css } from 'styled-components';

// #region ====== style ===
const PaginationWrapper = styled.div<{ disabled?: boolean } & GeneratedPropTypes>`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .pagesContainerMobile {
        display: none;
    }

    & .pagesContainer {
        align-items: center;
        display: flex;
        justify-content: center;

        & a {
            display: block;
        }

        & .prevPage,
        .nextPage {
            display: none;
        }

        & .page,
        .break {
            padding: 0 0.125rem;

            & a {
                color: ${colors.g500};
                cursor: pointer;
                border-radius: 8px;
                font-family: ${fonts.families.sans};
                font-size: ${typography.text.small[0] / 16}rem;
                font-weight: ${fonts.weights.medium};
                line-height: ${typography.text.small[1] / 16}rem;
                padding: 0.625rem 1rem;
                ${transitions(['background-color', 'color'], 250, ease.inOutQuad)};

                &:hover,
                &.pageSelected {
                    background-color: ${colors.p600};
                    color: ${colors.n01};
                }
            }
        }
    }

    & .navPages {
        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        & p,
        svg {
            ${transitions('color', 250, ease.inOutQuad)};
        }

        &:hover {
            & p,
            svg {
                color: ${colors.p600};
            }
        }
    }

    ${mq.phone(
        css`
            & .navPages p,
            .pagesContainer {
                display: none;
            }

            & .pagesContainerMobile {
                display: block;
            }
        `
    )}

    ${({ disabled }) =>
        disabled &&
        `
        & .pagesContainer {
            opacity: 0.5;
            pointer-events: none;
        }
    `}

    ${generateProps};
`;
// #endregion === style ===

export type PaginationProps = {
    currentPage: number;
    disabled?: boolean;
    pageCount: number;
    handlePageClick: any;
    breakLabel?: string;
    nextLabel?: string;
    nextIcon?: string;
    previousLabel?: string;
    previousIcon?: string;
    pageRangeDisplayed?: number;
    marginPagesDisplayed?: number;
    mobileText?: any;
} & GeneratedPropTypes;

export const Pagination: React.FC<PaginationProps> = props => {
    const {
        currentPage,
        disabled,
        breakLabel,
        handlePageClick,
        marginPagesDisplayed,
        mobileText,
        nextLabel,
        nextIcon,
        pageCount,
        pageRangeDisplayed,
        previousIcon,
        previousLabel,
        ...forwardProps
    } = props;

    const Pagination = ReactPaginate as any;

    return (
        <>
            {pageCount > 1 && (
                <PaginationWrapper disabled={disabled} {...forwardProps}>
                    {(previousLabel || previousIcon) && (
                        <a
                            className={`navPages ${disabled ? 'disabled' : ''}`}
                            onClick={(e: any) => !disabled && handlePageClick(e, 1)}
                        >
                            <Row fLayout="start" margin={0} pr={0.625}>
                                {previousIcon && (
                                    <Col mr={{ sm: 0.75, xs: 0 }} padding={0}>
                                        <Icon g500 icon={previousIcon} />
                                    </Col>
                                )}
                                {previousLabel && (
                                    <Col padding={0}>
                                        <Text g500 medium small>
                                            {previousLabel}
                                        </Text>
                                    </Col>
                                )}
                            </Row>
                        </a>
                    )}
                    <Pagination
                        activeLinkClassName="pageSelected"
                        breakLabel={breakLabel || '...'}
                        containerClassName="pagesContainer"
                        forcePage={currentPage}
                        marginPagesDisplayed={marginPagesDisplayed || 3}
                        nextClassName="nextPage"
                        onPageChange={!disabled && handlePageClick}
                        pageClassName="page"
                        pageCount={pageCount}
                        pageRangeDisplayed={pageRangeDisplayed || 3}
                        previousClassName="prevPage"
                        renderOnZeroPageCount={() => null}
                    />
                    <Text className="pagesContainerMobile" g700 medium small>
                        {mobileText || `${currentPage + 1} / ${pageCount}`}
                    </Text>
                    {(nextLabel || nextIcon) && (
                        <a
                            className={`navPages ${disabled ? 'disabled' : ''}`}
                            onClick={(e: any) => !disabled && handlePageClick(e, 2)}
                        >
                            <Row fLayout="start" margin={0} pl={0.625}>
                                {nextLabel && (
                                    <Col padding={0}>
                                        <Text g500 medium small>
                                            {nextLabel}
                                        </Text>
                                    </Col>
                                )}
                                {nextIcon && (
                                    <Col ml={{ sm: 0.75, xs: 0 }} padding={0}>
                                        <Icon g500 icon={nextIcon} />
                                    </Col>
                                )}
                            </Row>
                        </a>
                    )}
                </PaginationWrapper>
            )}
        </>
    );
};
