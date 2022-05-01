import React, {useState} from 'react'
import {StateContext} from 'store'
import PropTypes from 'prop-types'
import Svg, {Line, Rect, Text} from 'react-native-svg'
import {Dimensions, View} from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart'
import {Dataset} from 'react-native-chart-kit/dist/HelperTypes'

interface LineChartWithTooltipsProps {
  data: any
  width: number
  height: number
  chartConfig: AbstractChartConfig
}

const Tooltip = ({
  tooltipVisible,
  tooltipPos,
  height,
}: {
  height: number
  tooltipVisible: boolean
  tooltipPos: {
    x: number
    y: number
    value: number
  }
}) => {
  return tooltipVisible ? (
    <View>
      <Svg>
        <Line
          x={tooltipPos.x}
          y={tooltipPos.y + 5}
          stroke="white"
          y2={height}
        />
        <Rect
          x={
            tooltipPos.x > Dimensions.get('window').width / 1.2
              ? tooltipPos.x - 67
              : tooltipPos.x < Dimensions.get('window').width / 1.2
              ? tooltipPos.x - 9
              : tooltipPos.x - 40
          }
          y={tooltipPos.y > height / 2 ? tooltipPos.y - 36 : tooltipPos.y + 24}
          width="75"
          height="24"
          fill="black"
        />
        <Text
          x={
            tooltipPos.x > Dimensions.get('window').width / 1.2
              ? tooltipPos.x - 30
              : tooltipPos.x < Dimensions.get('window').width / 1.2
              ? tooltipPos.x + 29
              : tooltipPos.x
          }
          y={tooltipPos.y > height / 2 ? tooltipPos.y - 20 : tooltipPos.y + 40}
          fill="white"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle">
          {tooltipPos.value}
        </Text>
      </Svg>
    </View>
  ) : null
}
const LineChartWithTooltips = ({...props}: LineChartWithTooltipsProps) => {
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    value: 0,
  })
  const state = React.useContext(StateContext)

  const dataPointClicked = (dataValues: {
    index: number
    value: number
    dataset: Dataset
    x: number
    y: number
    getColor: (opacity: number) => string
  }) => {
    let isSamePoint =
      tooltipPos.x === dataValues.x && tooltipPos.y === dataValues.y

    if (isSamePoint) {
      setTooltipPos(previousState => {
        return {
          ...previousState,
          value: props.data.labels[dataValues.index],
        }
      })
      state.handleTooltip(false)
    } else {
      state.handleValue(dataValues.value)
      setTooltipPos({
        x: dataValues.x,
        value: props.data.labels[dataValues.index],
        y: dataValues.y,
      })
      state.handleTooltip(true)
    }
  }
  return (
    <React.Fragment>
      <LineChart
        {...props}
        decorator={() => (
          <Tooltip
            tooltipVisible={state.tooltipVisible}
            tooltipPos={tooltipPos}
            height={props.height}
          />
        )}
        onDataPointClick={dataPointClicked}
        chartConfig={props.chartConfig}
        width={Dimensions.get('window').width + 48}
        height={props.height}
        bezier
        transparent
        withHorizontalLabels={false}
        withVerticalLabels={false}
        xLabelsOffset={0}
        withHorizontalLines={false}
        withVerticalLines={false}
        withOuterLines={false}
        style={{
          padding: 0,
          marginLeft: -38,
          paddingBottom: -props.height * 0.15,
          zIndex: 99999,
        }}
      />
    </React.Fragment>
  )
}

export default LineChartWithTooltips
