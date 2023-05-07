import React from 'react'

import Table from '../../../../components/Tables/Table';

import { SearchEntriesContainer, TableSearch, TableEntries, TableTitle } from '../../../../components/Tables/Table/Components';

function ParcelsTable() {
  return (
    <Table>
        <SearchEntriesContainer>
            <TableSearch/>
            <TableEntries/>
        </SearchEntriesContainer>
    </Table>
  )
}

export default ParcelsTable