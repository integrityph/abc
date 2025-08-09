/* ===================================================================
 * IntegrityNet - Custom JS
 *
 * ------------------------------------------------------------------- */

// custom-cursor
var cursor = {
    delay: 3,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();


// tilt.js
$('.site-logo').tilt({
    axis: 'x',
    perspective: 600
});

$('.timeline-year').tilt({
    glare: true,
    maxGlare: .5,
    perspective: 500,
});

$('.solution-tilt').tilt({
    glare: true,
    maxGlare: .5,
    perspective: 1000,
    maxTilt: 20
});

$('.more-work .solution-tilt').tilt({
    axis: 'x',
    glare: true,
    maxGlare: .5,
    perspective: 1000
});

$('.x-tilt').tilt({
    axis: 'x',
    maxGlare: .3,
    perspective: 2000
});

$('.y-tilt').tilt({
    axis: 'y',
    maxGlare: .3,
    perspective: 2000
});

$('.career-card img').tilt({
    axis: 'x',
    glare: true,
    maxGlare: .5,
    perspective: 600
});

$('.insights-image').tilt({
    glare: true,
    maxGlare: .3,
    perspective: 3000
});

$('.gallery-image').tilt({
    glare: true,
    maxGlare: .25,
    perspective: 1000,
    maxTilt: 15
});


$('.iso-cert-img').tilt({
    glare: true,
    maxGlare: .25,
    perspective: 1000,
    maxTilt: 5
});

// owl

// about hero slide
$('.about-more-btn').click(function () {
    $('.about-text-2').toggle(1000);
    $('.about-text-3').toggle(500);
    $(this).toggleClass('read-more');
    // $(this).text('Read less ').append('<i class="fas fa-chevron-up"></i>');

    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b)
            // .append('<i class="fas fa-chevron-up"></i>');
        }
    });

    $(this).toggleText("Read more", "Read less ");
});