import {
  LiaSortNumericDownSolid,
  LiaSortNumericUpSolid,
  LiaThListSolid,
} from 'react-icons/lia'
import { BsFillGridFill, BsSortAlphaDown, BsSortAlphaUp } from 'react-icons/bs'

export const colorScheme = [
  '#f7f0f0',
  '#01EB55',
  '#BE9786',
  '#F4DE13',
  '#F43F13',
  '#2EC8CD',
  '#442687',
  '#3263DB',
  '#F50042',
  '#902A41',
  '#C29F1D',
  '#000000',
]

export const fonts = [
  {
    id: 1,
    name: 'Poppins',
    value: `'Poppins', sans-serif`,
  },
  {
    id: 2,
    name: 'Cormorant',
    value: `'Cormorant', serif`,
  },
  {
    id: 3,
    name: 'Hachi Maru Pop',
    value: `'Hachi Maru Pop', cursive`,
  },
  {
    id: 4,
    name: 'Herr Von Muellerhoff',
    value: `'Herr Von Muellerhoff', cursive`,
  },
  {
    id: 5,
    name: 'Mochiy Pop One',
    value: `'Mochiy Pop One', sans-serif`,
  },
  {
    id: 6,
    name: 'Qwitcher Grypen',
    value: `'Qwitcher Grypen', cursive`,
  },
  {
    id: 7,
    name: 'Sedgwick Ave Display',
    value: `'Sedgwick Ave Display', cursive`,
  },
  {
    id: 8,
    name: 'Tilt Prism',
    value: `'Tilt Prism', cursive`,
  },
]

export const listType = [
  {
    id: 1,
    value: 'list',
    icon: <LiaThListSolid />,
  },
  {
    id: 2,
    value: 'grid',
    icon: <BsFillGridFill />,
  },
]

export const sortType = [
  {
    id: 'sort1',
    field: 'title',
    value: 'asc',
    icon: <BsSortAlphaDown />,
  },
  {
    id: 'sort2',
    field: 'title',
    value: 'desc',
    icon: <BsSortAlphaUp />,
  },
  {
    id: 'sort3',
    field: 'createdAt',
    value: 'asc',
    icon: <LiaSortNumericUpSolid />,
  },
  {
    id: 'sort4',
    field: 'createdAt',
    value: 'desc',
    icon: <LiaSortNumericDownSolid />,
  },
]
