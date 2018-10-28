const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');

const make = require('./src/make.js');

const recursion = require('./src/recursion.js');

function sum(a, b) {
    return a + b;
}

function div(a, b) {
    return Math.floor(a / b);
}

function multy(a, b) {
    return a * b;
}
function deff(a, b) {
    return a - b;
}


describe('sumOfOther', function () {
    it('1', function () {
        const result = sumOfOther([2, 3, 4, 1])
        assert.deepEqual(result, [8, 7, 6, 9]);
    });

    it('2', function () {
        const result = sumOfOther([])
        assert.deepEqual(result, []);
    });

    it('3', function () {
        const result = sumOfOther([36, 55, 79, 32, 16, 93, 14, 66, 95, 18])
        assert.deepEqual(result, [468, 449, 425, 472, 488, 411, 490, 438, 409, 486]);
    });

    it('4', function () {
        const result = sumOfOther([35, 75, 5, 15, 4, 4, 1, 86, 57, 36])
        assert.deepEqual(result, [283, 243, 313, 303, 314, 314, 317, 232, 261, 282]);
    });

    it('5', function () {
        const result = sumOfOther([23, 11, 90, 68, 72, 79, 11, 55, 58, 84])
        assert.deepEqual(result, [528, 540, 461, 483, 479, 472, 540, 496, 493, 467]);
    });

    it('6', function () {
        const result = sumOfOther([31, 86, 85, 19, 99, 43, 85, 95, 9, 48])
        assert.deepEqual(result, [569, 514, 515, 581, 501, 557, 515, 505, 591, 552]);
    });

    it('7', function () {
        const result = sumOfOther([61, 27, 40, 15, 44, 65, 44, 52, 69, 34])
        assert.deepEqual(result, [390, 424, 411, 436, 407, 386, 407, 399, 382, 417]);
    });

    it('8', function () {
        const result = sumOfOther([77, 49, 21, 53, 4, 32, 51, 66, 30, 32])
        assert.deepEqual(result, [338, 366, 394, 362, 411, 383, 364, 349, 385, 383]);
    });

    it('9', function () {
        const result = sumOfOther([39, 24, 31, 6, 14, 18, 73, 40, 84, 11])
        assert.deepEqual(result, [301, 316, 309, 334, 326, 322, 267, 300, 256, 329]);
    });


    it('10', function () {
        const result = sumOfOther([55, 64, 98, 74, 4, 76, 48, 43, 89, 63])
        assert.deepEqual(result, [559, 550, 516, 540, 610, 538, 566, 571, 525, 551]);
    });


    it('11', function () {
        const result = sumOfOther([73, 88, 44, 23, 8, 52, 3, 11, 88, 47
            , 5, 69, 48, 70, 14, 89, 81, 87, 99, 9
            , 35, 48, 12, 91, 96, 61, 77, 39, 97,
            43, 21, 51, 55, 19, 49, 65, 49, 55, 21
            , 61, 55, 64, 61, 37, 42, 31, 89, 22, 31
            , 93, 25, 40, 41, 96, 1, 91, 67, 68, 63,
            91, 22, 42, 77, 13, 95, 91, 2, 32, 26, 23
            , 61, 52, 30, 75, 35, 11, 66, 36, 3, 94, 42
            , 7, 15, 40, 9, 93, 80, 47, 4, 3, 6, 65, 32
            , 43, 20, 66, 86, 75, 64, 90])
        assert.deepEqual(result, [4861, 4846, 4890, 4911, 4926, 4882, 4931
            , 4923, 4846, 4887, 4929, 4865, 4886, 4864,
            4920, 4845, 4853, 4847, 4835, 4925, 4899, 4886
            , 4922, 4843, 4838, 4873, 4857, 4895, 4837, 4891
            , 4913, 4883, 4879, 4915, 4885, 4869, 4885, 4879,
            4913, 4873, 4879, 4870, 4873, 4897, 4892, 4903, 4845
            , 4912, 4903, 4841, 4909, 4894, 4893, 4838, 4933, 4843
            , 4867, 4866, 4871, 4843, 4912, 4892, 4857, 4921, 4839
            , 4843, 4932, 4902, 4908, 4911, 4873, 4882, 4904, 4859
            , 4899, 4923, 4868, 4898, 4931, 4840, 4892, 4927, 4919
            , 4894, 4925, 4841, 4854, 4887, 4930, 4931, 4928, 4869,
            4902, 4891, 4914, 4868, 4848, 4859, 4870, 4844]);
    });

    it('12', function () {
        const result = sumOfOther([83, 29, 45, 37, 30, 74, 74, 15, 81, 46
            , 96, 23, 53, 96, 75, 67, 66, 28, 4, 4
            , 65, 73, 16, 65, 97, 41, 94, 34, 99, 17
            , 16, 18, 87, 67, 3, 57, 53, 44, 19, 54,
            48, 58, 73, 93, 12, 39, 60, 54, 67, 89, 96,
            49, 43, 97, 51, 86, 69, 81, 75, 14, 4, 29, 27
            , 24, 67, 41, 57, 98, 95, 9, 29, 69, 14, 40, 82
            , 15, 15, 55, 47, 25, 99, 25, 45, 46, 45, 14, 86
            , 88, 27, 14, 73, 26, 87, 33, 14, 11, 50, 20,
            73, 27])
        assert.deepEqual(result, [4961, 5015, 4999, 5007, 5014, 4970, 4970, 5029
            , 4963, 4998, 4948, 5021, 4991, 4948, 4969, 4977,
            4978, 5016, 5040, 5040, 4979, 4971, 5028, 4979, 4947
            , 5003, 4950, 5010, 4945, 5027, 5028, 5026, 4957,
            4977, 5041, 4987, 4991, 5000, 5025, 4990, 4996, 4986
            , 4971, 4951, 5032, 5005, 4984, 4990, 4977, 4955, 4948
            , 4995, 5001, 4947, 4993, 4958, 4975, 4963, 4969, 5030
            , 5040, 5015, 5017, 5020, 4977, 5003, 4987, 4946, 4949
            , 5035, 5015, 4975, 5030, 5004, 4962, 5029, 5029, 4989
            , 4997, 5019, 4945, 5019, 4999, 4998, 4999, 5030, 4958,
            4956, 5017, 5030, 4971, 5018, 4957, 5011, 5030, 5033,
            4994, 5024, 4971, 5017]);
    });

    it('13', function () {
        const result = sumOfOther();
        assert.deepEqual(result, { error: 'Not array' });
    });
    it('14', function () {
        const result = sumOfOther("str");
        assert.deepEqual(result, { error: 'Not array' });
    });
    it('15', function () {
        const result = sumOfOther({});
        assert.deepEqual(result, { error: 'Not array' });
    });







    describe('make', function () {
        it('1', function () {
            const result = make(15)(34, 21, 666)(41)(sum);
            assert.equal(result, 777);
        });

        it('2', function () {
            const result = make(15)(sum);
            assert.equal(result, 15);
        });

        it('3', function () {
            const result = make(15)(43, 12, 145)(23)(56)(78)(sum);
            assert.equal(result, 372);
        });

        it('4', function () {
            const result = make(10, 65, 35)(sum);
            assert.equal(result, 110);
        });

        it('5', function () {
            const result = make(12, 45, 67, 87, 789, 12)(123, 124, 124, 235, 346, 6445)(sum);
            assert.equal(result, 8409);
        });

        it('6', function () {
            const result = make(388)(78, 44562, 567)(66)(5234)(234, 345)(sum);
            assert.equal(result, 51474);
        });

        it('7', function () {
            const result = make(3, 4, 7)(sum);
            assert.equal(result, 14);
        });
        it('8', function () {
            const result = make(34, 33)(45, 56)(sum);
            assert.equal(result, 168);
        });

        it('9', function () {
            const result = make(123, 56)(34)(45)(56)(78)(34)(23)(789)(234)(233, 235)(123, 23, 234, 231, 35, 634, 6234)(sum);
            assert.equal(result, 9454);
        });

        it('10', function () {
            const result = make(5678885)(345667)(sum);
            assert.equal(result, 6024552);
        });

        it('11', function () {
            const result = make(23423)(234, 234, 76)(deff);
            assert.equal(result, 22879);
        });


        it('12', function () {
            const result = make(2342, 78, 98, 56, 32, 56, 4)(56)(deff);
            assert.equal(result, 1962);
        });

        it('13', function () {
            const result = make(34, 354, 67)(23, 678)(deff);
            assert.equal(result, -1088);
        });

        it('14', function () {
            const result = make(345)(345)(43)(div);
            assert.equal(result, 0);
        });

        it('15', function () {
            const result = make(34567773)(234)(345)(div);
            assert.equal(result, 428);
        });
        it('16', function () {
            const result = make(657)(45)(54)(multy);
            assert.equal(result, 1596510);
        });

        it('17', function () {
            const result = make(123)(456)(56)(multy);
            assert.equal(result, 3140928);
        });

        it('18', function () {
            const result = make(546)(75)(1)(435)(657)(multy);
            assert.equal(result, 11703305250);
        });

        it('19', function () {
            const result = make();
            assert.deepEqual(result, { error: 'Not number' });
        });
        it('20', function () {
            const result = make("str");
            assert.deepEqual(result, { error: 'Not number' });
        });
        it('21', function () {
            const result = make({});
            assert.deepEqual(result, { error: 'Not number' });
        });

    });


    describe('Recursion', function () {
        it('1', function () {
            const result = recursion({ "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } });
            assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
        });
        it('2', function () {
            const result = recursion({ "value": 15, "left": { "value": 46, "left": { "value": 789 }, "right": { "value": 45 } }, "right": { "value": 33, "left": { "value": 1 }, "right": { "value": 3 } } });
            assert.deepEqual(result, [[15], [46, 33], [789, 45, 1, 3]]);
        });

        it('3', function () {
            const result = recursion({ "value": 1, "left": { "value": 2, "left": { "value": 4 }, "right": { "value": 5 } }, "right": { "value": 3 } });
            assert.deepEqual(result, [[1], [2, 3], [4, 5]]);
        });

        it('4', function () {
            const result = recursion({ "value": 1, "left": { "value": 2, "left": { "value": 4 }, "right": { "value": 5 } }, "right": { "value": 3, "left": { "value": 6 }, "right": { "value": 7 } } });
            assert.deepEqual(result, [[1], [2, 3], [4, 5, 6, 7]]);
        });

        it('5', function () {
            const result = recursion();
            assert.deepEqual(result, { error: 'Not obj' });
        });
        it('6', function () {
            const result = recursion("str");
            assert.deepEqual(result, { error: 'Not obj' });
        });
        it('7', function () {
            const result = recursion(12);
            assert.deepEqual(result, { error: 'Not obj' });
        });
    });
});

