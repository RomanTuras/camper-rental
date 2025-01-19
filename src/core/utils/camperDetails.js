class CamperDetails {
  featuresList = [
    'AC',
    'TV',
    'bathroom',
    'kitchen',
    'refrigerator',
    'transmission',
    'engine',
    'radio',
    'microwave',
    'gas',
    'water',
  ];

  detailsList = ['form', 'length', 'width', 'height', 'tank', 'consumption'];

  #camperDetails = [];
  #camperFeatures = [];

  constructor(camper) {
    this.camper = camper;
    this.#initLists();
  }

  #initLists = () => {
    for (const [key, value] of Object.entries(this.camper)) {
      if (this.featuresList.includes(key)) {
        let item = key;
        switch (key) {
          case 'transmission':
            item = value;
            break;
          case 'engine':
            item = value;
            break;
          case 'petrol':
            item = value;
            break;
          case 'hybrid':
            item = value;
            break;
        }
        this.#camperFeatures.push(item);
      }

      if (this.detailsList.includes(key)) {
        this.#camperDetails.push({ [key]: value });
      }
    }
  };

  getAvailableDetails() {
    return this.#camperDetails;
  }

  getAvailableFeatures() {
    return this.#camperFeatures;
  }
}

export default CamperDetails;
