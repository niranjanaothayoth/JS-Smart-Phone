class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    return `${this.ram}\n${this.batteryPower}\n${this.price}`;
  }

  remainingAmount(amount) {
    if (amount >= this.price) {
      this.price -= amount;
      return;
    } else {
      throw new Error(
        "Customer can't able to buy a phone due to insufficient amount"
      );
    }
  }
}

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }

  displayFeatures() {
    return `${this.modelName}\n${super.displayFeatures()}`;
  }

  remainingAmount(amount) {
    if (amount >= this.price) {
      const remaining = amount - this.price;
      this.price = 0;
      return `Customer has remaining Rs.${remaining} after buying the android phone`;
    } else {
      throw new Error(
        "Customer can't able to buy a phone due to insufficient amount"
      );
    }
  }
}

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }

  displayFeatures() {
    return `${this.seriesName}\n${super.displayFeatures()}`;
  }

  remainingAmount(amount) {
    if (amount >= this.price) {
      const remaining = amount - this.price;
      this.price = 0;
      return `Customer has remaining Rs.${remaining} after buying an iphone`;
    } else {
      throw new Error(
        "Customer can't able to buy a phone due to insufficient amount"
      );
    }
  }
}

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }

  changeMobileAvailabilityNumber(count, mobileType) {
    this.NoOfMobiles -= count;
    if (mobileType === 'android') {
      this.NoOfAndroidMobiles -= count;
      return `Available android mobiles are ${this.NoOfAndroidMobiles}`;
    } else if (mobileType === 'iphone') {
      this.NoOfIPhoneMobiles -= count;
      return `Available iphone mobiles are ${this.NoOfIPhoneMobiles}`;
    }
  }
}

// Export the classes using ES6 syntax
export { SmartPhone, AndroidPhone, IPhone, MobileCampus };
