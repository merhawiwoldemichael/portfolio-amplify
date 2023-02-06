window.clg = window.clg || {};
window.clg.razKids = window.clg.razKids || {};

window.clg.razKids.FavoriteController = function($) {

    var clickedLink;
    var resourceId;
    var toFavorite;
    var disableClick = false;
    var errorMessage = $('#favoriteDisabled');
    var favoriteService = window.clg.razKids.FavoriteService($);

    var toggleFavorite = function(clickedLink) {
        if (!disableClick) {
            disableClick = true;
            setResourceInfo(clickedLink);
            favoriteService.saveFavoriteState(
                resourceId,
                toFavorite,
                setButtonStateFavorite,
                setButtonStateNotFavorite,
                setButtonStateDisabled
            );
        }
    };

    var setResourceInfo = function (link) {
        clickedLink = link;
        resourceId = link[0].id.split('_')[1];
        toFavorite = !link.hasClass('is-active');
    };

    var setButtonStateFavorite = function() {
        clickedLink.addClass('is-active');
        disableClick = false;
    };

    var setButtonStateNotFavorite = function() {
        clickedLink.removeClass('is-active');
        disableClick = false;
    };

    var setButtonStateDisabled = function() {
        errorMessage.show();
        clickedLink.addClass('disabled');
        disableClick = true;
    };

    return {
        toggleFavorite: toggleFavorite
    };

};

clg.razKids.FavoriteService = function($) {

    var saveFavoriteState = function (resourceId, toFavorite, favoriteCb, notFavoriteCb, failCb) {
        $.ajax({
            url: '/api/favorite/resource/' + resourceId,
            type: toFavorite ? 'PUT' : 'DELETE',
            success: function (response) {
                if (response === 'success' && toFavorite) {
                    favoriteCb();
                } else if (response === 'success' && !toFavorite) {
                    notFavoriteCb();
                } else {
                    failCb();
                }
            },
            error: function () {
                failCb();
            }
        });
    };

    return {
        saveFavoriteState: saveFavoriteState
    };

};
