import * as React from 'react';
import './App.css';
import { signal, computed, effect } from '@preact/signals-react';

const count = signal(0); //declare a variable with observable auto rerender in UI
const double = computed(() => count.value * 2); //declare a variable with 

effect(() => {
  console.log(count.value);
});



export default function App() {
  return (
    <div>
      <h1>
        count:{count.value}, double:{double.value}
      </h1>
      <button
        onClick={() => {
          count.value++;
        }}
      >
        increment
      </button>
    </div>
  );
}
