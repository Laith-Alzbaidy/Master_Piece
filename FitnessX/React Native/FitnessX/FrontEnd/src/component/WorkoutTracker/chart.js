import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
const Chart = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {/* <Text>Bezier Line Chart</Text> */}
      <LineChart
        data={{
          labels: ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
          barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
        }}
        width={350} // from react-native
        height={220}
        yAxisLabel="%"
        xLabelsOffset={10}
        yLabelsOffset={20}
        verticalLabelRotation={2}
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: "red",
          backgroundGradientFrom: "#94abfc",
          backgroundGradientTo: "#94abfc",
          decimalPlaces: 2,
          color: () => `#ffffff`,
          labelColor: () => `#ffffff`,
          style: {
            borderRadius: 16,
          },

          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "gray",
          },
          // propsForBackgroundLines: {
          //   stroke: "red", // Change the line color (solid)
          //   strokeWidth: 2, // Set the line width (you can adjust as needed)
          //   strokeDasharray: [], // Make the line solid (no dashes)
          // },
        }}
        bezier
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Chart;
