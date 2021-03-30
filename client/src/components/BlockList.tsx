import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchBlocks } from '../state/actions'
// import { fetchBlocks } from '../state/actions'
import { IRootState } from '../state/store'
import Block from './Block'

const BlocksContainer = styled.div`
  padding:10px 0;
  margin:0 auto;
`

const BlockList = () => {

  const dispatch = useDispatch()
  const { blocks } = useSelector((state: IRootState) => state.blocks)


  useEffect(() => {
    const request = async () => {
      await dispatch(fetchBlocks())
    }
    request()
  }, [])

  return (
    <BlocksContainer>
      {blocks.map((block, index) => {
        return (
          <Block key={block.id} block={block} idx={index} />
        )
      })}
    </BlocksContainer>
  )
}

export default BlockList
