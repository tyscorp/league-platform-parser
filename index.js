var platforms = [
    {
        regionTag: 'br',
        platformId: 'BR1',
        name: 'Brazil'
    },
    {
        regionTag: 'eune',
        platformId: 'EUN1',
        name: 'Europe Nordic & East'
    },
    {
        regionTag: 'euw',
        platformId: 'EUW1',
        name: 'Europe West'
    },
    {
        regionTag: 'kr',
        platformId: 'KR',
        name: 'Korea'
    },
    {
        regionTag: 'lan',
        platformId: 'LA1',
        name: 'Latin America North'
    },
    {
        regionTag: 'las',
        platformId: 'LA2',
        name: 'Latin America South'
    },
    {
        regionTag: 'na',
        platformId: 'NA1',
        name: 'North America'
    },
    {
        regionTag: 'oce',
        platformId: 'OC1',
        name: 'Oceania'
    },
    {
        regionTag: 'pbe',
        platformId: 'PBE1',
        name: 'Public Beta Environment'
    },
    {
        regionTag: 'ru',
        platformId: 'RU1',
        name: 'Russia'
    },
    {
        regionTag: 'tr',
        platformId: 'TR1',
        name: 'Turkey'
    },
    {
        regionTag: 'tw',
        platformId: 'TW',
        name: 'Taiwan'
    }
];

var tagToPlatformId = {};
var byPlatformId = {};

for (var i = 0; i < platforms.length; i++) {
    tagToPlatformId[platforms[i].regionTag.toUpperCase()] = platforms[i].platformId;
    byPlatformId[platforms[i].platformId] = platforms[i];
}

module.exports = function (serverString) {
    if (typeof serverString !== 'string') return null;

    var s = serverString.toUpperCase();

    if (byPlatformId[s]) {
        return byPlatformId[s];
    }
    else if (tagToPlatformId[s]) {
        return byPlatformId[tagToPlatformId[s]];
    }
    
    return null;
};
