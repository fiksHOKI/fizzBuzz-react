import React from "react";
import CounterDisplay from "./CounterDisplay";
import IncreaseButton from "./IncreaseButton";
import ResetButton from "./ResetButton";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    //Oke, saat ini memang fungsi handler yang dibuat berada di dalam component CounterApp, tetapi fungsi dipanggil oleh IncreaseButton. Sehingga, nilai this ketika fungsi tersebut dipanggil bukan CounterApp melainkan window (IncreaseButton tidak memiliki this-nya sendiri karena functional component, sehingga nilai this adalah window).
    //Untuk menyelesaikan eror ini, kita perlu mengikat konteks dari nilai this pada fungsi handler agar tetap CounterApp. Caranya, kita lakukan binding nilai this pada fungsi event handler tersebut. Silakan tambahkan kode berikut pada constructor component CounterApp.

    //binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  //   method event handler
  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default CounterApp;
