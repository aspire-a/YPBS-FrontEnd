"use client";

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import RehberSearchBar from './RehberSearchBar';
import RehberTableVariantRehber from './RehberTableVariantRehber';
import RehberTableVariantHome from './RehberTableVariantHome';
import useSWR from 'swr';

interface RehberContentProps {
    variant: string;
}

const RehberContent: React.FC<RehberContentProps> = ({ variant }) => {
    const [page, setPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(5);
    
    const {data: users}= useSWR("/api/user/findUsersWithFilters");
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', gap:0.5 }}>

            <RehberSearchBar variant={variant} page={page} pageSize={pageSize} />

            {(variant==="home") && <RehberTableVariantHome users={users} page={page} pageSize={pageSize} setPage={setPage} setPageSize={setPageSize}/>}
            {(variant==="rehber") && <RehberTableVariantRehber users={users} page={page} pageSize={pageSize} setPage={setPage} setPageSize={setPageSize}/>}
            
        </Box>
        
    );
};

export default RehberContent;
