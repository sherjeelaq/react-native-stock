import React, {useContext, useEffect, useState} from 'react'
import {Col} from 'components'
import LineChartWithTooltips from './LineChatWithTooltips'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import {oneWeek, twoWeek, oneMonth, threeMonth, sixMonth, oneYear} from 'lib'
import Categories from './Categories'
import {StateContext} from 'store'
import {TouchableOpacity} from 'react-native'

interface Option {
  type: string
  data: {
    labels: string[]
    datasets: {
      data: number[]
      strokeWidth: number
    }[]
  }
}

function Graph() {
  const state = useContext(StateContext)
  const [option, setOption] = useState({
    type: '1w',
    data: oneWeek,
  })
  const options = [
    {
      type: '1w',
      data: oneWeek,
    },
    {
      type: '2w',
      data: twoWeek,
    },
    {
      type: '1m',
      data: oneMonth,
    },
    {
      type: '3m',
      data: threeMonth,
    },
    {
      type: '6m',
      data: sixMonth,
    },
    {
      type: '1y',
      data: oneYear,
    },
  ]

  useEffect(() => {
    state.handleStartWith(oneWeek.datasets[0].data[0])
    state.handleValue(oneWeek.datasets[0].data[0])
  }, [])

  const handleOption = ({type, data}: Option) => {
    if (type === option.type) return
    state.handleTooltip(false)
    setOption({
      type,
      data,
    })
    state.handleStartWith(data.datasets[0].data[0])
    state.handleValue(data.datasets[0].data[0])
  }

  return (
    <Col noFlex pad="20px 0 0">
      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(27),
          // position: 'absolute',
          zIndex: 9999,
        }}
        activeOpacity={1}
        onPress={() => state.handleTooltip(false)}>
        <React.Fragment>
          <LineChartWithTooltips
            data={option.data}
            width={widthPercentageToDP(100)}
            height={heightPercentageToDP(27)}
            chartConfig={{
              decimalPlaces: 2,
              color: () => `rgba(70,187,98, 0.9)`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForBackgroundLines: {
                stroke: '#ffffff',
              },
              propsForDots: {
                r: 6,
              },
              style: {
                paddingLeft: 0,
                marginLeft: 0,
              },
            }}
          />
        </React.Fragment>
      </TouchableOpacity>
      <Categories
        handleOption={handleOption}
        options={options}
        selected={option.type}
      />
    </Col>
  )
}

export default Graph
