import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const ChartButtons = props => {
    return (
        <>
            <Button className="week">Weekly</Button>
            <Button className="dateBox">20/9/2018 - 27/09/2018</Button>

            <Pagination className="pagination" size="sm" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </>
    );
};

export default ChartButtons;
