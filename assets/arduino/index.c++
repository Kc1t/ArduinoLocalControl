int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {

  if (Serial.available()) {
    char command = Serial.read();
    if (command == '1') {
      digitalWrite(ledPin, HIGH);
      Serial.println("Ligado");
    } else if (command == '0') {
      digitalWrite(ledPin, LOW);
      Serial.println("Desligado");
    }
  }
  delay(100);
  
}
