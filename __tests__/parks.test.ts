import request from "supertest";
import app from "../app";
import { Park } from "../types/CustomTypes";
import { seedDatabase } from "../db/seed/seed";
import db from "../db/connection";

beforeEach(() => seedDatabase());
afterAll(() => seedDatabase());

describe("GET /api/parks", () => {
  test("GET /api/parks should return 200 status code", () => {
    return request(app).get("/api/parks").expect(200);
  });
  test("GET /api/parks should return an an array of objects that matches the test data", () => {
    return request(app)
      .get("/api/parks")
      .expect(200)
      .then((response) => {
        const parksArray = response.body;
        parksArray.forEach((park: Park) => {
          expect(typeof park.name).toBe("string");
          expect(typeof park.desc).toBe("string");
          expect(typeof park.size).toBe("number");
          expect(typeof park.current_average_rating).toBe("number");
          expect(typeof park.current_review_count).toBe("number");
          expect(Array.isArray(park.features)).toBe(false);
          expect(typeof park.features).toBe("object");
          expect(typeof park.opening_hours).toBe("object");
          expect(typeof park.opening_hours.monday).toBe("string");
          expect(typeof park.opening_hours.tuesday).toBe("string");
          expect(typeof park.opening_hours.wednesday).toBe("string");
          expect(typeof park.opening_hours.thursday).toBe("string");
          expect(typeof park.opening_hours.friday).toBe("string");
          expect(typeof park.opening_hours.saturday).toBe("string");
          expect(typeof park.opening_hours.sunday).toBe("string");
          expect(typeof park.address).toBe("object");
          expect(typeof park.address.firstLine).toBe("string");
          expect(typeof park.address.secondLine).toBe("string");
          expect(typeof park.address.postCode).toBe("string");
          expect(typeof park.address.city).toBe("string");
          expect(typeof park.location).toBe("object");
          expect(typeof park.location.long).toBe("string");
          expect(typeof park.location.lat).toBe("string");
          expect(typeof park.image_url).toBe("string");
          expect(typeof park.website_url).toBe("string");
          expect(typeof park.phone_number).toBe("string");
        });
      });
  });
});

describe("GET /api/parks/:park_id", () => {
  test("GET /api/parks/:park_id should return 200 status code", () => {
    return request(app).get("/api/parks/park_1").expect(200);
  });
  test("GET /api/parks/:park_id should return an an array of objects that matches the test data", () => {
    return request(app)
      .get("/api/parks/park_1")
      .expect(200)
      .then((response) => {
        const park: Park = response.body;
        expect(typeof park.name).toBe("string");
        expect(typeof park.desc).toBe("string");
        expect(typeof park.size).toBe("number");
        expect(typeof park.current_average_rating).toBe("number");
        expect(typeof park.current_review_count).toBe("number");
        expect(Array.isArray(park.features)).toBe(false);
        expect(typeof park.features).toBe("object");
        expect(typeof park.opening_hours).toBe("object");
        expect(typeof park.opening_hours.monday).toBe("string");
        expect(typeof park.opening_hours.tuesday).toBe("string");
        expect(typeof park.opening_hours.wednesday).toBe("string");
        expect(typeof park.opening_hours.thursday).toBe("string");
        expect(typeof park.opening_hours.friday).toBe("string");
        expect(typeof park.opening_hours.saturday).toBe("string");
        expect(typeof park.opening_hours.sunday).toBe("string");
        expect(typeof park.address).toBe("object");
        expect(typeof park.address.firstLine).toBe("string");
        expect(typeof park.address.secondLine).toBe("string");
        expect(typeof park.address.postCode).toBe("string");
        expect(typeof park.address.city).toBe("string");
        expect(typeof park.location).toBe("object");
        expect(typeof park.location.long).toBe("string");
        expect(typeof park.location.lat).toBe("string");
        expect(typeof park.image_url).toBe("string");
        expect(typeof park.website_url).toBe("string");
        expect(typeof park.phone_number).toBe("string");
      });
  });
});

describe("POST /api/parks/", () => {
  test("POST /api/parks should return 201 status code when given a valid park", () => {
    const validParkRequest = {
      name: "Shelfield Park",
      desc: "A park containing two full-size football pitches, a football and basketball cage, and a children's soft play area.",
      size: 6,
      features: {
        isFree: false,
        isWellLit: false,
        isFreeParking: false,
        isParking: true,
        hasAgilityEquipment: false,
        isFullyEnclosed: true,
        hasDisabledAccess: true,
      },
      opening_hours: {
        monday: "8am - 5pm",
        tuesday: "8am - 5pm",
        wednesday: "8am - 5pm",
        thursday: "8am - 5pm",
        friday: "8am - 5pm",
        saturday: "8am - 5pm",
        sunday: "8am - 5pm",
      },
      address: {
        firstLine: "29 LEGGE LANE",
        secondLine: "Jewel Court",
        postCode: "B1 3LE",
        city: "Birmingham",
      },
      image_url: "https://www.park.com/",
      website_url: "https://www.parkwebsite.com/",
      phone_number: "07800989434",
    };
    return request(app).post("/api/parks/").send(validParkRequest).expect(201);
  });
  test("POST /api/parks/ should the accepted park when given a valid park", () => {
    const validParkRequest = {
      name: "Shelfield Park",
      desc: "A park containing two full-size football pitches, a football and basketball cage, and a children's soft play area.",
      size: 6,
      features: {
        isFree: false,
        isWellLit: false,
        isFreeParking: false,
        isParking: true,
        hasAgilityEquipment: false,
        isFullyEnclosed: true,
        hasDisabledAccess: true,
      },
      opening_hours: {
        monday: "8am - 5pm",
        tuesday: "8am - 5pm",
        wednesday: "8am - 5pm",
        thursday: "8am - 5pm",
        friday: "8am - 5pm",
        saturday: "8am - 5pm",
        sunday: "8am - 5pm",
      },
      address: {
        firstLine: "29 LEGGE LANE",
        secondLine: "Jewel Court",
        postCode: "B1 3LE",
        city: "Birmingham",
      },
      image_url: "https://www.park.com/",
      website_url: "https://www.parkwebsite.com/",
      phone_number: "07800989434",
    };
    return request(app)
      .post("/api/parks/")
      .send(validParkRequest)
      .expect(201)
      .then((response) => {
        const park: Park = response.body;
        expect(typeof park.name).toBe("string");
        expect(typeof park.desc).toBe("string");
        expect(typeof park.size).toBe("number");
        expect(typeof park.current_average_rating).toBe("number");
        expect(typeof park.current_review_count).toBe("number");
        expect(Array.isArray(park.features)).toBe(false);
        expect(typeof park.features).toBe("object");
        expect(typeof park.opening_hours).toBe("object");
        expect(typeof park.opening_hours.monday).toBe("string");
        expect(typeof park.opening_hours.tuesday).toBe("string");
        expect(typeof park.opening_hours.wednesday).toBe("string");
        expect(typeof park.opening_hours.thursday).toBe("string");
        expect(typeof park.opening_hours.friday).toBe("string");
        expect(typeof park.opening_hours.saturday).toBe("string");
        expect(typeof park.opening_hours.sunday).toBe("string");
        expect(typeof park.address).toBe("object");
        expect(typeof park.address.firstLine).toBe("string");
        expect(typeof park.address.secondLine).toBe("string");
        expect(typeof park.address.postCode).toBe("string");
        expect(typeof park.address.city).toBe("string");
        expect(typeof park.location).toBe("object");
        expect(typeof park.location.long).toBe("number");
        expect(typeof park.location.lat).toBe("number");
        expect(typeof park.image_url).toBe("string");
        expect(typeof park.website_url).toBe("string");
        expect(typeof park.phone_number).toBe("string");
      });
  });
  test("POST /api/parks should return 400 status code when given no park", () => {
    return request(app).post("/api/parks/").send().expect(400);
  });
  test("POST /api/parks should return 400 status code when given a park with missing or invalid data", () => {
    const invalidParkMissingName = {
      desc: "A park containing two full-size football pitches, a football and basketball cage, and a children's soft play area.",
      size: 6,
      current_average_rating: 4,
      current_review_count: 1,
      features: {
        isFree: false,
        isWellLit: false,
        isFreeParking: false,
        isParking: true,
        hasAgilityEquipment: false,
        isFullyEnclosed: true,
        hasDisabledAccess: true,
      },
      opening_hours: {
        monday: "8am - 5pm",
        tuesday: "8am - 5pm",
        wednesday: "8am - 5pm",
        thursday: "8am - 5pm",
        friday: "8am - 5pm",
        saturday: "8am - 5pm",
        sunday: "8am - 5pm",
      },
      address: {
        firstLine: "29 LEGGE LANE",
        secondLine: "Jewel Court",
        postCode: "B1 3LE",
        city: "Birmingham",
      },
      location: {
        long: "-1.902585",
        lat: "52.498464",
      },
      image_url: "https://www.park.com/",
      website_url: "https://www.parkwebsite.com/",
      phone_number: "07800989434",
    };
    return request(app)
      .post("/api/parks/")
      .send(invalidParkMissingName)
      .expect(400)
      .then((response) => {
        const message: string = response.body.msg;
        expect(message).toBe("Invalid park details");
      });
  });
  test("POST /api/parks should return 400 status code when given a park with missing or invalid data", () => {
    const invalidParkInvalidName = {
      name: 12,
      desc: "A park containing two full-size football pitches, a football and basketball cage, and a children's soft play area.",
      size: 6,
      current_average_rating: 4,
      current_review_count: 1,
      features: {
        isFree: false,
        isWellLit: false,
        isFreeParking: false,
        isParking: true,
        hasAgilityEquipment: false,
        isFullyEnclosed: true,
        hasDisabledAccess: true,
      },
      opening_hours: {
        monday: "8am - 5pm",
        tuesday: "8am - 5pm",
        wednesday: "8am - 5pm",
        thursday: "8am - 5pm",
        friday: "8am - 5pm",
        saturday: "8am - 5pm",
        sunday: "8am - 5pm",
      },
      address: {
        firstLine: "29 LEGGE LANE",
        secondLine: "Jewel Court",
        postCode: "B1 3LE",
        city: "Birmingham",
      },
      location: {
        long: "-1.902585",
        lat: "52.498464",
      },
      image_url: "https://www.park.com/",
      website_url: "https://www.parkwebsite.com/",
      phone_number: "07800989434",
    };
    return request(app)
      .post("/api/parks/")
      .send(invalidParkInvalidName)
      .expect(400)
      .then((response) => {
        const message: string = response.body.msg;
        expect(message).toBe("Invalid park details");
      });
  });
});

describe("DELETE /api/parks/:park_id", () => {
  test("DELETE /api/parks/:park_id should return 204 status code", () => {
    return request(app).delete("/api/parks/park_1").expect(204);
  });
  test("DELETE /api/parks/:park_id should correctly delete parks", () => {
    return request(app)
      .delete("/api/parks/park_1")
      .expect(204)
      .then(() => {
        return db
          .collection("parks")
          .doc("park_1")
          .get()
          .then((snapshot) => {
            expect(snapshot.exists).toBe(false);
          });
      });
  });
  test("DELETE /api/parks/:park_id should return 404 status code if no park is found for the given park_id", () => {
    return request(app).delete("/api/parks/non_existent_park_id").expect(404);
  });
});
