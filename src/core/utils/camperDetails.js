class CamperDetails {
  featuresList = [
    'AC',
    'TV',
    'bathroom',
    'kitchen',
    // 'radio',
    'refrigerator',
    // 'microwave',
    // 'gas',
    // 'water',
    'transmission',
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
        this.#camperFeatures.push(key === 'transmission' ? value : key);
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
