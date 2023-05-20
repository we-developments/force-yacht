import { useIconGetter } from '@/src/hooks/useIconGetter';
import React from 'react'
import Helmboat from '../../images/svgs/helm-boat'

const Loading = () => {

    const { Icon } = useIconGetter();

    return (
        <div className='flex items-center justify-center h-full w-full'>
            <div className='flex w-28 animate-spin'>
                <Helmboat color={'rgb(0 106 161 / 0.5)'}/>
            </div>
        </div>
    )
}

export default Loading