import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { updateBlock } from '../state/actions'
import { setCurrentBlock, updateBlockInList } from '../state/blocksSlice'
import { IRootState } from '../state/store'

const Panel = styled.div`
  width:300px;
  height:100vh;
  /* position: fixed; */
  background-color:#5b5bfc;
  left:0;
  padding:40px 10px
`

const Input = styled.input`
  padding:10px;
  margin:10px 0;
  width:100%
`

const TextArea = styled.textarea`
  height:100px;
  width:100%
`
const Title = styled.h1`
  margin:20px 0px;
  color: #e9dada;
`

const InputGroup = styled.div`
  color:white
`
const Link = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover{
    color:#f0a3a3;
  }
`

const SidePanel = () => {
  const dispatch = useDispatch()
  const { block, index } = useSelector((state: IRootState) => state.blocks.currentBlock)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    const newBlock = { ...block, [name]: value }
    newBlock.fontSize = +newBlock.fontSize
    dispatch(setCurrentBlock({ index, block: newBlock }))
    dispatch(updateBlockInList({ index, block: newBlock }))
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLTextAreaElement> | React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newBlock = { ...block, [name]: value }
    newBlock.fontSize = +newBlock.fontSize
    dispatch(updateBlock(newBlock))
  }

  return (
    <Panel>
      <Title>Settings</Title>
      <form action="">
        <InputGroup>
          <label htmlFor='text'>Text:</label>
          <TextArea
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleOnBlur(e)}
            name='text'
            placeholder='text content'
            value={block.text}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='fontSize'>Font size:</label>
          <Input
            style={{ width: 60, margin: '0 10px' }}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleOnBlur(e)}
            name='fontSize'
            type='number'
            value={block.fontSize} /><span>px</span>
        </InputGroup>
        <InputGroup>
          <label htmlFor='color'>Text color:</label>
          <Input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleOnBlur(e)}
            name='color'
            type='color'
            value={block.color} />
        </InputGroup>
        <InputGroup>
          <label htmlFor='bgColor'>Background color:</label>
          <Input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleOnBlur(e)}
            name='bgColor'
            type='color'
            value={block.bgColor} />
        </InputGroup>
        <Link target='blank' rel='noopener noreferrer' href='https://github.com/hightower86/vvt-pern-app'>Go to Code</Link>
      </form>

    </Panel>
  )
}

export default SidePanel
