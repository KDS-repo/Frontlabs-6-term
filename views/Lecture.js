import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Lecture");
    }

    async getHtml() {
        return `
				<p>In sed ante sit amet ligula fermentum ornare. Cras mollis sit amet lacus id finibus. Phasellus eu mauris quis lectus interdum porttitor vitae finibus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget elit at magna mattis euismod. Quisque volutpat hendrerit sem, ut tristique lacus ultrices convallis. Nunc et consequat neque, quis tristique orci.</p>
				<img style="border: 1px solid black; width: 100%; height: 20em;">
				<p>Phasellus ornare massa diam, laoreet porttitor velit posuere ut. Vestibulum luctus dapibus turpis, vel varius enim maximus quis. Aliquam sed sollicitudin lacus, ac semper massa. Donec bibendum purus eget sem tristique lobortis. Maecenas turpis ante, pharetra non interdum sed, pretium non enim. Vivamus at posuere leo. Praesent nibh massa, aliquam non vulputate in, fringilla et arcu. Nunc ac ante non leo ultrices pulvinar sed sit amet velit.</p>
				<p>Phasellus lacus massa, fermentum et consequat sed, lobortis at lorem. Nullam non tortor a risus luctus elementum vitae vel lectus. Cras a augue hendrerit, faucibus magna et, tempor lectus. In gravida neque ac interdum molestie. Morbi pellentesque a lacus in molestie. Suspendisse nec enim nisi. Cras vitae volutpat massa, eu euismod sem. Duis et ullamcorper massa. Donec dui metus, lacinia id tellus lacinia, ullamcorper feugiat felis. In orci ex, pellentesque sed enim eu, viverra interdum elit. Ut sit amet feugiat augue. Nullam aliquet magna at augue ornare varius. Maecenas rhoncus iaculis facilisis. Nulla nec fringilla est, ut convallis dui.</p>
				<p>Aenean eleifend odio vel turpis imperdiet commodo quis nec massa. Donec molestie porta dolor, a volutpat purus vulputate at. In rhoncus, enim eget bibendum iaculis, massa ipsum aliquam leo, a dapibus elit nisi id odio. Donec bibendum id felis vitae ullamcorper. Fusce non turpis vel dolor aliquam volutpat ut sed massa. Pellentesque a felis ante. Vivamus a mi placerat ligula tempus consectetur id quis ipsum. Etiam a sollicitudin lectus. Mauris at maximus nulla. In pretium iaculis porta. Mauris auctor, eros at pharetra condimentum, arcu ipsum malesuada mauris, vitae tincidunt risus odio eget erat. Nulla accumsan fringilla diam, ut pretium nulla gravida quis. Maecenas at ultricies ipsum.</p>
				<p>Integer dignissim arcu quis dolor efficitur euismod. Vestibulum hendrerit nibh orci, nec venenatis orci consectetur non. Nulla at pretium mauris. Curabitur quis elit nisi. Quisque finibus urna fringilla, dictum quam nec, lobortis leo. Curabitur sed blandit turpis. Nulla facilisi. Nunc et dui in felis blandit mollis. In maximus, ante in congue bibendum, mauris leo suscipit ex, sed cursus lorem lectus sed turpis. Cras fringilla consequat orci, a pretium felis.</p>
        `;
    }
}