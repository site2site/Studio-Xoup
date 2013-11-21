/* Arduino humidity sensor sketch*/


int HIH4030_Pin = A0; //analog pin 0

void setup(){
  Serial.begin(9600);
}

void loop(){

  //To properly caculate relative humidity, we need the temperature.
  float temperature = 25; //replace with a thermometer reading if you have it
  float relativeHumidity  = getHumidity(temperature);

  Serial.println(relativeHumidity);

  delay(100); //just here to slow it down so you can read it
}


float getHumidity(float degreesCelsius){
  //caculate relative humidity
  float supplyVolt = 5.0;

  // read the value from the sensor:
  int HIH4030_Value = analogRead(HIH4030_Pin);
  float voltage = HIH4030_Value/1023. * supplyVolt; // convert to voltage value

  // convert the voltage to a relative humidity
  // - the equation is derived from the HIH-4030/31 datasheet
  // - it is not calibrated to your individual sensor
  //  Table 2 of the sheet shows the may deviate from this line
  float sensorRH = 161.0 * voltage / supplyVolt - 25.8;
  float trueRH = sensorRH / (1.0546 - 0.0026 * degreesCelsius); //temperature adjustment 

  return trueRH;
}